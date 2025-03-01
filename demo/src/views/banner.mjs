// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div id="banner-form-container">
    <form>
      <select>
        <option value="">(none)</option>
        <option value="dark">dark</option>
        <option value="danger">danger</option>
        <option value="warning">warning</option>
        <option value="success">success</option>
        <option value="primary">primary</option>
        <option value="info">info</option>
        <option value="link">link</option>
      </select>

      <input type="submit" value="Show banner" />
    </form>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const BannerView = createVueComponentWithCSS({
  name: "x-banner-view",
  template,

  data() {
    return {
      css,
    }
  },
})

export { BannerView }

// !(() => {
//   const container = document.querySelector("#banner-form-container")
//   const form = container.querySelector("form")

//   form.addEventListener("submit", event => {
//     event.preventDefault()
//     event.stopImmediatePropagation()

//     const existingBanners = Array.from(document.querySelectorAll(".banner"))

//     existingBanners.forEach(b => {
//       if (b.parentElement) {
//         b.parentElement.removeChild(b)
//       }
//     })

//     const color = form.querySelector("select").value
//     const banner = document.createElement("div")
//     document.body.appendChild(banner)
//     banner.classList.add("banner")
//     banner.classList.add("bottom")

//     banner.innerHTML = `
//     <div>Accept these cookies — or else!</div>
//     <button>Okay...</button>
//   `

//     const button = banner.querySelector("button")

//     if (color) {
//       banner.classList.add(color)
//       button.classList.add(color)
//     }

//     button.addEventListener("click", () => {
//       if (banner.parentElement) {
//         banner.parentElement.removeChild(banner)
//       }
//     })
//   })
// })()
