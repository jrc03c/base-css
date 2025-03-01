// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div>
    <progress class="light"></progress>
  </div>

  <div>
    <progress></progress>
  </div>

  <div>
    <progress class="dark"></progress>
  </div>

  <div>
    <progress class="danger"></progress>
  </div>

  <div>
    <progress class="warning"></progress>
  </div>

  <div>
    <progress class="success"></progress>
  </div>

  <div>
    <progress class="primary"></progress>
  </div>

  <div>
    <progress class="info"></progress>
  </div>

  <div>
    <progress class="link"></progress>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const ProgressView = createVueComponentWithCSS({
  name: "x-progress-view",
  template,

  data() {
    return {
      css,
    }
  },
})

export { ProgressView }

// !(() => {
//   const progresses = Array.from(document.querySelectorAll("progress"))
//   const diff = (2 * Math.PI) / progresses.length
//   let frame = 0

//   const loop = () => {
//     progresses.forEach((p, i) => {
//       p.value = Math.sin(frame / 30 + i * diff) * 0.25 + 0.5
//       p.innerHTML = p.value * 100 + "%"
//     })

//     frame++
//     window.requestAnimationFrame(loop)
//   }

//   loop()
// })()
