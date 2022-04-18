import { listContainer, hamburger, goBackButton } from "./Data.js"
import { renderMainPage } from "./SiteRendering/RenderMainPage.js"
import { hideNavigation, showNavigation, goToSection } from "./Navigation.js"
import { goToProduct } from "./SiteRendering/RenderProduct.js"

// import { goldInfo } from "./GoldAPI.js"

listContainer.addEventListener("click", goToSection)
hamburger.addEventListener("click", showNavigation)
document.body.addEventListener("click", goToProduct)
goBackButton.addEventListener("click", () => renderMainPage())

if (location.pathname !== "/htmlProducts/terms_and_conditions.html") {
  renderMainPage()
}

hideNavigation()
