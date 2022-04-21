class NavigationView {
  #hamburger = document.querySelector(".center")
  #listContainer = document.querySelector(".list__container")

  addShowNavHandler(handler) {
    this.#hamburger.addEventListener("click", handler)
  }

  addGoToSectionHandler(handler) {
    this.#listContainer.addEventListener("click", handler)
  }
}

export default new NavigationView()
