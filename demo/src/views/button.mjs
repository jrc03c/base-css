// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  #button-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    gap: var(--spacing-sm) var(--spacing-xs);
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div id="button-container">
    <button>Button</button>
    <button class="dark">Dark</button>
    <button class="danger">Danger</button>
    <button class="warning">Warning</button>
    <button class="success">Success</button>
    <button class="primary">Primary</button>
    <button class="info">Info</button>
    <button class="link">Link</button>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const ButtonView = createVueComponentWithCSS({
  name: "x-button-view",
  template,

  data() {
    return {
      css,
    }
  },
})

export { ButtonView }
