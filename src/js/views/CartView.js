import eagle from "../../images/eagle.jpg"
import kangaroo from "../../images/kangaroo.jpg"
import bison from "../../images/bison.jpg"
import krugerand from "../../images/krugerand.jpg"
import lipa from "../../images/lipa.jpg"
import philharmonic from "../../images/philharmonic.jpg"
import sztabka from "../../images/sztabka.jpg"

const images = [eagle, kangaroo, bison, krugerand, lipa, philharmonic, sztabka]

class CartView {
  #contentWrapper = document.querySelector(".content-wrapper")
  #goBackButton = document.querySelector(".go-back--btn")
  #listContainer
  #data
  #allAddedAmount
  #summaryToPay

  addGoToCartHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  addRemoveItemFromShoppingCartHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  addOrderListItemsHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  addClearListItemsHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  renderCart(allAddedAmount, summaryToPay) {
    this.#allAddedAmount = allAddedAmount
    this.#summaryToPay = +summaryToPay.toFixed(2)

    this.#contentWrapper.innerHTML = ``

    this.#goBackButton.classList.contains("hidden") &&
      this.#goBackButton.classList.remove("hidden")

    const html = this.#generateHtml(this.#allAddedAmount, this.#summaryToPay)

    this.#contentWrapper.insertAdjacentHTML("beforeend", html)

    this.#listContainer = document.querySelector(".cart__container--list")
  }

  renderListItem(data) {
    this.#data = data

    for (let i = 0; i < this.#data.length; i++) {
      const listItemHtml = this.#generateListItem(this.#data[i])
      this.#listContainer.innerHTML += listItemHtml
    }
  }

  removeListItem(item) {
    item.remove()
  }

  removeAllListItems(item) {
    item.remove()
  }

  #generateHtml(allAddedAmount, summaryToPay) {
    return `<section class="cart__container">
    <h2 class="cart__container--header font-thin-italic flex--center golden-color shining__borders">Cart</h2>

    <ul class="cart__container--providers border__bottom">
        <li class="cart__container--providers-name">Item</li>
        <li class="cart__container--providers-name">Amount</li>
        <li class="cart__container--providers-name">Price</li>
        <li class="cart__container--providers-name">Total</li>
    </ul>

    <ul class="cart__container--list flex--column">
    </ul>

    <h2 class="cart__container--summary margin__top--15 font-thin-italic">${
      allAddedAmount > 0
        ? "In the cart you've got " +
          allAddedAmount +
          (allAddedAmount > 1 ? " items" : " item")
        : "You've got no items in cart."
    } ${
      allAddedAmount > 0
        ? 'worth: <span class="cart__container--summary-price font-weight-700">$' +
          summaryToPay +
          "</span>"
        : ""
    }
    </h2>

    <div class="cart__container--buttons flex">
    <button class="cart__container--buttons--order cart__container--button golden-color shining__borders font-weight-700">Order</button>
    <button class="cart__container--buttons--clear cart__container--button golden-color shining__borders">Clear</button>
    </div>
    
  </section>`
  }

  #generateListItem(data) {
    return ` <li class="cart__container--list-item border__bottom" id=${
      data.product.id
    }>
    <div class="cart__container--list-item-div flex--column">                    
      <img src="${images.find((img) =>
        img.split("/").at(-1).split(".")[0] === data.product.shortcut
          ? img
          : false
      )}" alt="">
      <h3 class="font-thin-italic">${data.product.name}</h3>
    </div>
      <p class="cart__container--list-item-amount">${data.amount}</p>
      <p class="cart__container--list-item-price">${+data.price.toFixed(2)}</p>
      <p class="cart__container--list-item-total">${+(
        data.amount * data.price
      ).toFixed(2)}</p>
      <button class="remove-item"><i class="fas fa-trash-alt"></i></button>
  </li>`
  }
}

export default new CartView()
