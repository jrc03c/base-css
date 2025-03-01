// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div>
    <b>base.css</b> is <a href="https://github.com/jrc03c">@jrc03c</a>'s core
    CSS library. He plans to build on top of it to create other CSS libraries.
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const HomeView = createVueComponentWithCSS({
  name: "x-home-view",
  template,

  data() {
    return {
      css,
    }
  },
})

export { HomeView }
