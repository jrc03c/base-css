// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div id="banner-form-container">
    <form @submit.prevent="onSubmit">
      <div class="row row-left row-tight">
        <select v-model="color">
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
      </div>
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
      color: "info",
      css,
    }
  },

  methods: {
    onSubmit() {
      this.removeAllBanners()

      const banner = document.createElement("div")
      document.body.appendChild(banner)
      banner.classList.add("banner")
      banner.classList.add("bottom")

      banner.innerHTML = `
        <div>Accept these cookies — or else!</div>
        <button>Okay...</button>
      `

      const button = banner.querySelector("button")

      if (this.color) {
        banner.classList.add(this.color)
        button.classList.add(this.color)
      }

      button.addEventListener("click", () => {
        if (banner.parentElement) {
          banner.parentElement.removeChild(banner)
        }
      })
    },

    removeAllBanners() {
      const existingBanners = Array.from(document.querySelectorAll(".banner"))

      existingBanners.forEach(b => {
        if (b.parentElement) {
          b.parentElement.removeChild(b)
        }
      })
    },
  },

  unmounted() {
    this.removeAllBanners()
  },
})

export { BannerView }

!(() => {})()
