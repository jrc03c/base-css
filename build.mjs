import { execSync } from "node:child_process"
import { watch } from "@jrc03c/watch"
import fs from "node:fs"
import path from "node:path"
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

    // (5) index.html
    const template = fs.readFileSync("demo/index.html", "utf8")
    const includes = template.match(/\{%\s*?include.*?%\}/g)
    let out = template.slice()

    includes.forEach(i => {
      const file = path.join(
        "demo",
        i.split("include")[1].split("%}")[0].trim(),
      )

      const raw = fs.readFileSync(file, "utf8")
      out = out.replaceAll(i, raw)
    })

    fs.writeFileSync("index.html", out, "utf8")
    execSync(`npx prettier -w index.html`, { encoding: "utf8" })
    console.log("\nDone! 🎉\n")
  } catch (e) {
    console.error(e)
  }
}

if (process.argv.indexOf("-w") > -1 || process.argv.indexOf("--watch") > -1) {
  watch({
    target: ".",
    include: ["demo", "src"],
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })
}

rebuild()
