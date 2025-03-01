import { execSync } from "node:child_process"
import { watch } from "@jrc03c/watch"
import fs from "node:fs"
import process from "node:process"

function rebuild() {
  console.log("\n-----\n")
  console.log(`Rebuilding... (${new Date().toLocaleString()})`)

  try {
    execSync(`mkdir -p dist`, { encoding: "utf8" })
    execSync(`rm dist/*`, { encoding: "utf8" })

    // (1) base.css
    fs.copyFileSync("src/base.css", "dist/base.css")

    // (2) base.min.css
    execSync(`npx esbuild src/base.css --minify --outfile=dist/base.min.css`, {
      encoding: "utf8",
    })

    // (3) base.norm.css
    const normalizer = fs.readFileSync(
      "node_modules/normalize.css/normalize.css",
      "utf8",
    )

    const base = fs.readFileSync("src/base.css")
    fs.writeFileSync("dist/base.norm.css", normalizer + "\n\n" + base, "utf8")

    // (4) base.norm.min.css
    execSync(
      `npx esbuild dist/base.norm.css --minify --outfile=dist/base.norm.min.css`,
    )

    // (5) demo
    fs.copyFileSync("dist/base.norm.min.css", "demo/base.norm.min.css")

    execSync(
      `npx esbuild demo/src/main.mjs --bundle --outfile=demo/bundle.js`,
      { encoding: "utf8" },
    )

    console.log("\nDone! 🎉\n")
  } catch (e) {
    console.error(e)
  }
}

if (process.argv.indexOf("-w") > -1 || process.argv.indexOf("--watch") > -1) {
  watch({
    target: "demo",
    exclude: ["base.norm.min.css", "bundle.js"],
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })

  watch({
    target: "src",
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })
}

rebuild()
