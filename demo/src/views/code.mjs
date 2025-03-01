// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div>
    <p>
      Here's a
      <code>code</code>
      block:
    </p>

    <pre ref="pre">
      <code ref="code">
        function fib(n) {
          if (n < 3) return 1
          return fib(n - 1) + fib(n - 2)
        }
      </code>
    </pre>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const CodeView = createVueComponentWithCSS({
  name: "x-code-view",
  template,

  data() {
    return {
      css,
    }
  },

  mounted() {
    // This script just removes the extra whitespace around the code so that it
    // displays as expected.
    const { code, pre } = this.$refs

    Array.from(pre.childNodes).forEach(child => {
      if (child.textContent.trim().length === 0) {
        pre.removeChild(child)
      }
    })

    const lines = code.textContent.split("\n").slice(1, -1)

    const indentation = Math.min(
      ...lines
        .filter(line => line.trim().length > 0)
        .map(line => line.match(/^(\s| )+/g)[0].length),
    )

    code.textContent = lines
      .map(line => (line.trim().length === 0 ? line : line.slice(indentation)))
      .join("\n")
  },
})

export { CodeView }
