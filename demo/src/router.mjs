import {
  createRouter,
  createWebHashHistory,
} from "vue-router/dist/vue-router.esm-bundler.js"

import { BannerView } from "./views/banner.mjs"
import { BlockquoteView } from "./views/blockquote.mjs"
import { ButtonView } from "./views/button.mjs"
import { CodeView } from "./views/code.mjs"
import { ColumnsView } from "./views/columns.mjs"
import { DetailsView } from "./views/details.mjs"
import { FigureView } from "./views/figure.mjs"
import { FooterView } from "./views/footer.mjs"
import { FormView } from "./views/form.mjs"
import { HeadingsView } from "./views/headings.mjs"
import { HomeView } from "./views/home.mjs"
import { ListsView } from "./views/lists.mjs"
import { ModalView } from "./views/modal.mjs"
import { NavView } from "./views/nav.mjs"
import { ProgressView } from "./views/progress.mjs"
import { TableView } from "./views/table.mjs"
import { TagView } from "./views/tag.mjs"

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    { path: "/", component: HomeView },
    { path: "/banner", component: BannerView },
    { path: "/blockquote", component: BlockquoteView },
    { path: "/button", component: ButtonView },
    { path: "/code", component: CodeView },
    { path: "/columns", component: ColumnsView },
    { path: "/details", component: DetailsView },
    { path: "/figure", component: FigureView },
    { path: "/footer", component: FooterView },
    { path: "/form", component: FormView },
    { path: "/headings", component: HeadingsView },
    { path: "/home", component: HomeView },
    { path: "/lists", component: ListsView },
    { path: "/modal", component: ModalView },
    { path: "/nav", component: NavView },
    { path: "/progress", component: ProgressView },
    { path: "/table", component: TableView },
    { path: "/tag", component: TagView },
  ],
})

export { router }
