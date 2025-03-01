// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  section.app > .row > div:has(aside) {
    padding-right: var(--spacing);
    border-right: var(--line-thickness) solid var(--color-gray-0);
  }

  section.app > .row > div:not(:has(aside)) {
    flex-grow: 999999;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <section class="app">
    <header>
      <h1>
        <a href="#">
          base.css
        </a>
      </h1>
    </header>

    <div class="row row-left row-top">
      <div>
        <div>
          <b class="text-gray-6">Documentation</b>
        </div>

        <aside>
          <menu>
            <li><router-link to="/banner">Banner</router-link></li>
            <li><router-link to="/blockquote">Blockquote</router-link></li>
            <li><router-link to="/button">Button</router-link></li>
            <li><router-link to="/code">Code</router-link></li>
            <li><router-link to="/columns">Columns</router-link></li>
            <li><router-link to="/details">Details</router-link></li>
            <li><router-link to="/figure">Figure</router-link></li>
            <li><router-link to="/footer">Footer</router-link></li>
            <li><router-link to="/form">Form</router-link></li>
            <li><router-link to="/headings">Headings</router-link></li>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/lists">Lists</router-link></li>
            <li><router-link to="/modal">Modal</router-link></li>
            <li><router-link to="/nav">Nav</router-link></li>
            <li><router-link to="/progress">Progress</router-link></li>
            <li><router-link to="/table">Table</router-link></li>
            <li><router-link to="/tag">Tag</router-link></li>
          </menu>
        </aside>
      </div>

      <div>
        <router-view></router-view>
      </div>
    </div>
  </section>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createApp } from "vue/dist/vue.esm-bundler.js"
import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"
import { router } from "./router.mjs"

const app = createApp(
  createVueComponentWithCSS({
    template,

    data() {
      return {
        css,
      }
    },
  }),
)

app.use(router)
app.mount("#app")
