import eagle from "../../images/eagle.jpg"
import kangaroo from "../../images/kangaroo.jpg"
import bison from "../../images/bison.jpg"
import krugerand from "../../images/krugerand.jpg"
import lipa from "../../images/lipa.jpg"
import philharmonic from "../../images/philharmonic.jpg"
import sztabka from "../../images/sztabka.jpg"

const images = [eagle, kangaroo, bison, krugerand, lipa, philharmonic, sztabka]

class ProductPageView {
  #contentWrapper = document.querySelector(".content-wrapper")
  #goBackButton = document.querySelector(".go-back--btn")
  #data
  #itemPrice

  addGoBackHandler(handler) {
    this.#goBackButton.addEventListener("click", handler)
  }

  renderProductPage(data, updatedItemsPrices) {
    this.#data = data

    this.#itemPrice = updatedItemsPrices[data.id - 1].slice(1)

    this.#contentWrapper.innerHTML = ``

    this.#goBackButton.classList.contains("hidden") &&
      this.#goBackButton.classList.remove("hidden")

    const html = this.#generateHtml(this.#data, this.#itemPrice)

    this.#contentWrapper.insertAdjacentHTML("beforeend", html)

    window.scrollTo({ top: 0 })
  }

  #generateHtml(data, itemPrice) {
    return `
    <figure class="golden-item__product ${data.shortcut} border__bottom" id=${
      data.id
    }>
    <img src="${images.find((img) =>
      img.split("/").at(-1).split(".")[0] === data.shortcut ? img : false
    )}" alt="" class="golden-item__product--image margin__top--15" />
    <h3 class="golden-item__product--price">$${itemPrice ?? "Loading..."}</h3>
    <p class="golden-item__product--title">${data.name}<p>
    <div class="golden-item__product--amount flex--center font-thin-italic">
      <h3>Amount:</h3>
      <input class="amount-input" type="number" min="1" max="10" value="1">
    </div>
    <div class="error-amount--container"></div>
    <button class="add-to-cart golden-color shining__borders">Add to cart <i class="fas fa-shopping-cart"></i></button>
  </figure>
      
  <section class="product__about border__bottom">
    <h2 class="product__about--header font-thin-italic flex--center golden-color shining__borders">${
      data.name
    }</h2>
    ${data.description}
    <br>
    <h3 class="product__about--description">It's great reflection of humans <span class="golden-color">richness</span>. Get it before others will!</h3>
  </section> `
  }
}

export default new ProductPageView()
