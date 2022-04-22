class NavigationView {
  #hamburger = document.querySelector(".center")
  #listContainer = document.querySelector(".list__container")
  #navGoldInfo = document.querySelector(".nav__gold-course > h4")

  addShowNavHandler(handler) {
    this.#hamburger.addEventListener("click", handler)
  }

  addGoToSectionHandler(handler) {
    this.#listContainer.addEventListener("click", handler)
  }

  setGoldCourseData(data, cena) {
    this.#navGoldInfo.textContent = `Current gold rate (${data}): $${cena} / 1oz.`
  }
}

export default new NavigationView()
