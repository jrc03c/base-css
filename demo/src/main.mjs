// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <section>
    <h1>
      <a href="#">
        base.css
      </a>
    </h1>

    <hr>

    <div class="cols">
      <div class="col col-3">
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

      <div class="col col-9">
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
