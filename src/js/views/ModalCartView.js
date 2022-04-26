class ModalCartView {
  #contentWrapper = document.querySelector(".content-wrapper")
  #amountInHeading = document.querySelector(".added-to-cart--heading")
  #amountOverally = document.querySelector(".added-to-cart--amount")

  addShowModalHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  addCloseModalHandler(handler) {
    document.body.addEventListener("click", handler)
  }

  addGoToCartHandler(handler) {
    document.querySelector(".go-to-cart").addEventListener("click", handler)
  }

  displayCurrentlyAddedAmount(value) {
    this.#amountInHeading.textContent = `You've added ${value} ${
      value > 1 ? "items" : "item"
    } to cart!`
  }

  displayAllAddedAmount(value) {
    this.#amountOverally.textContent = `${value} ${
      value === 1 ? "item" : "items"
    }`
  }
}

export default new ModalCartView()
