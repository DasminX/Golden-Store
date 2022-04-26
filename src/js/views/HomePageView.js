import eagle from "../../images/eagle.jpg"
import kangaroo from "../../images/kangaroo.jpg"
import bison from "../../images/bison.jpg"
import krugerand from "../../images/krugerand.jpg"
import lipa from "../../images/lipa.jpg"
import philharmonic from "../../images/philharmonic.jpg"
import sztabka from "../../images/sztabka.jpg"

class HomePageView {
  #contentWrapper = document.querySelector(".content-wrapper")
  #goBackButton = document.querySelector(".go-back--btn")
  #pricesArr = []

  addClickedProductHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  renderCurrentPrices(pricesArr) {
    this.#pricesArr = pricesArr
    this.renderMainPage()
  }

  renderMainPage() {
    this.#contentWrapper.innerHTML = ``

    !this.#goBackButton.classList.contains("hidden") &&
      this.#goBackButton.classList.add("hidden")

    const html = this.#generateHtml(this.#pricesArr)

    this.#contentWrapper.insertAdjacentHTML("beforeend", html)
  }

  #generateHtml(pricesArr) {
    return `
    <header class="header border__bottom">
      <h1 class="header__title golden-color">
        <span> Golden Archangel's Store</span>
      </h1>
      <h2 class="header__motto font-thin-italic">
        We are selling with a <br><br>
        <span class="golden-color">golden standard!</span>
      </h2>
      <h3>Scroll down to see more!</h3>
    </header>
  
    <main class="main grid--main">
      <section class="golden-items__container margin__top--15 border__bottom" id="coins" >
        <h2 class="golden-item--header font-thin-italic golden-color shining__borders">Golden coins:</h2>
        
        <figure class="golden-item eagle" id="${pricesArr[0]?.slice(0, 1)}">
          <img src="${eagle}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[0]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >American Eagle 1 oz.</a
          >
        </figure>
        <figure class="golden-item kangaroo" id="${pricesArr[1]?.slice(0, 1)}">
          <img src="${kangaroo}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[1]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >Australian Kangaroo 1 oz.</a
          >
        </figure>
        <figure class="golden-item philharmonic" id="${pricesArr[2]?.slice(
          0,
          1
        )}">
          <img src="${philharmonic}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[2]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >Vienna Philharmonic 1 oz.</a
          >
        </figure>
        <figure class="golden-item krugerand" id="${pricesArr[3]?.slice(0, 1)}">
          <img src="${krugerand}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[3]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >Krugerrand 1 oz.</a
          >
        </figure>
        <figure class="golden-item lipa" id="${pricesArr[4]?.slice(0, 1)}">
          <img src="${lipa}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[4]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >Canadian Maple Leaf 1 oz.</a
          >
        </figure>
        <figure class="golden-item bison" id="${pricesArr[5]?.slice(0, 1)}">
          <img src="${bison}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[5]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >American Buffalo 1 oz.</a
          >
        </figure>
      </section>
  
      <section class="golden-bars__container margin__top--15 border__bottom" id="bars">
        <h2 class="golden-item--header font-thin-italic golden-color shining__borders">Golden bars:</h2>
  
        <figure class="golden-item sztabka" id="${pricesArr[6]?.slice(0, 1)}">
          <img src="${sztabka}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[6]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >Golden Bar 10g</a
          >
        </figure>
        <figure class="golden-item sztabka" id="${pricesArr[7]?.slice(0, 1)}">
          <img src="${sztabka}" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$${
            pricesArr[7]?.slice(1) ?? "Loading..."
          }</h3>
          <a class="golden-item--link"
            >Golden Bar 1oz</a
          >
        </figure>
      </section>
    </main>`
  }
}

export default new HomePageView()
