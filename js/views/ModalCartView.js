class ModalCartView {
  #contentWrapper = document.querySelector(".content-wrapper")

  addShowModalHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  addCloseModalHandler(handler) {
    document.body.addEventListener("click", handler)
  }
}

export default new ModalCartView()
