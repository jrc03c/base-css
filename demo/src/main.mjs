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
            <li :key="route.path" v-for="route in routes">
              <span
                v-if="currentRouteFullPath.includes(route.path)">
                {{ route.title }}
              </span>

              <router-link :to="route.path" v-else>
                {{ route.title }}
              </router-link>
            </li>
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
        currentRouteFullPath: "/",
        routes: [
          { path: "/banner", title: "Banner" },
          { path: "/blockquote", title: "Blockquote" },
          { path: "/button", title: "Button" },
          { path: "/code", title: "Code" },
          { path: "/columns", title: "Columns" },
          { path: "/details", title: "Details" },
          { path: "/figure", title: "Figure" },
          { path: "/footer", title: "Footer" },
          { path: "/form", title: "Form" },
          { path: "/headings", title: "Headings" },
          { path: "/lists", title: "Lists" },
          { path: "/modal", title: "Modal" },
          { path: "/nav", title: "Nav" },
          { path: "/progress", title: "Progress" },
          { path: "/table", title: "Table" },
          { path: "/tag", title: "Tag" },
        ],
      }
    },

    mounted() {
      this.$router.beforeEach(to => {
        this.currentRouteFullPath = to.fullPath
      })
    },
  }),
)

app.use(router)
app.mount("#app")
