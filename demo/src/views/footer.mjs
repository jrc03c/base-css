// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="footer row row-comfy row-top">
    <div>
      <div>
        <a href="">Home</a>
      </div>

      <div>
        <a href="">About</a>
      </div>

      <div>
        <a href="">Documentation</a>
      </div>

      <div>
        <a href="">FAQ</a>
      </div>

      <div>
        <a href="">Contact</a>
      </div>
    </div>

    <div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        condimentum faucibus tellus, non consectetur felis pharetra ac. Aliquam
        dapibus dignissim rhoncus. Cras interdum ante vitae libero gravida, eget
        posuere metus tempus. Maecenas in fermentum eros, a commodo massa.
        Aliquam eu gravida urna. Sed porttitor pulvinar sem, a sodales risus
        semper eu.
      </div>

      <br />

      <div>Copyright Nobody 2025.</div>
    </div>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createApp } from "vue/dist/vue.esm-bundler.js"
import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const FooterView = createVueComponentWithCSS({
  name: "x-footer-view",
  template: "<div>(See the footer at the bottom of the page.)</div>",

  data() {
    return {
      css,
      footer: null,
      footerApp: null,
    }
  },

  mounted() {
    this.footer = document.createElement("footer")
    document.body.appendChild(this.footer)
    this.footerApp = createApp({ template })
    this.footerApp.mount(this.footer)
  },

  unmounted() {
    this.footerApp.unmount()
    this.footer.parentElement.removeChild(this.footer)
  },
})

export { FooterView }
