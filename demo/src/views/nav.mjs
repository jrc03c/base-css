// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <nav class="light" ref="nav">
    <div class="nav-left">
      <a href=""><b>base.css</b></a>
    </div>

    <div class="nav-right">
      <div class="nav-burger">
        <input id="nav-burger-checkbox" ref="checkbox" type="checkbox" />
        <label for="nav-burger-checkbox" ref="label"></label>
      </div>

      <menu>
        <li>
          <a href="">Home</a>
        </li>

        <li>
          <a href="">About</a>
        </li>

        <li>
          <a href="">Documentation</a>
        </li>

        <li>
          <a href="">FAQ</a>
        </li>

        <li>
          <a href="">Contact</a>
        </li>
      </menu>
    </div>
  </nav>

  <div>(See the navbar at the top of the page.)</div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const NavView = createVueComponentWithCSS({
  name: "x-nav-view`",
  template,

  data() {
    return {
      css,
    }
  },

  methods: {
    onKeyDown(event) {
      const { checkbox, label } = this.$refs

      if (
        event.key === "Escape" &&
        (checkbox.checked || checkbox.getAttribute("checked"))
      ) {
        label.click()
      }
    },
  },

  mounted() {
    // The nav menu itself uses pure CSS. This JS is only here to add the
    // convenience of closing the nav menu via the "Escape" key. In other words,
    // the menu can function perfectly well without this bit of JS!
    window.addEventListener("keydown", this.onKeyDown)
  },

  unmounted() {
    window.removeEventListener("keydown", this.onKeyDown)
  },
})

export { NavView }
