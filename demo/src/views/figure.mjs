// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <figure ref="figure">
    <img src="" ref="img" />
    <figcaption>A randomly-generated pattern</figcaption>
  </figure>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const FigureView = createVueComponentWithCSS({
  name: "x-figure-view",
  template,

  data() {
    return {
      css,
      resizeObserver: null,
    }
  },

  mounted() {
    const { figure, img } = this.$refs
    const canvas = document.createElement("canvas")

    const redraw = (() => {
      let timeout = null

      return () => {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
          const width = figure.parentElement.getBoundingClientRect().width
          const height = Math.min(320, width / 2)
          canvas.width = width
          canvas.height = height

          const context = canvas.getContext("2d")
          const step = Math.floor(width / 100)

          for (let x = 0; x < width; x += step) {
            for (let y = 0; y < height; y += step) {
              const lightness = Math.random() * 100
              context.fillStyle = `hsl(0deg, 0%, ${lightness}%)`
              context.fillRect(x, y, step, step)
            }
          }

          img.src = canvas.toDataURL()
        }, 100)
      }
    })()

    this.resizeObserver = new ResizeObserver(redraw)
    this.resizeObserver.observe(figure)
  },

  unmounted() {
    this.resizeObserver.disconnect()
  },
})

export { FigureView }
