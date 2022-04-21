class HomePageView {
  #contentWrapper = document.querySelector(".content-wrapper")
  #goBackButton = document.querySelector(".go-back--btn")

  addClickedProductHandler(handler) {
    this.#contentWrapper.addEventListener("click", handler)
  }

  renderMainPage() {
    this.#contentWrapper.innerHTML = ``

    !this.#goBackButton.classList.contains("hidden") &&
      this.#goBackButton.classList.add("hidden")

    const html = this.#generateHtml

    this.#contentWrapper.insertAdjacentHTML("beforeend", html)
  }

  #generateHtml() {
    return `
    <button class="go-back--btn hidden"><i class="fas fa-arrow-left"></i></button>

    <header class="header border__bottom">
      <h1 class="header__title golden-color">
        <span> Golden Archangel's Store</span>
      </h1>
      <h2 class="header__motto font-thin-italic">
        We are selling with a <br>
        <span class="golden-color">golden standard!</span>
      </h2>
      <h3>Scroll down to see more!</h3>
    </header>
  
    <main class="main grid--main">
      <section class="golden-items__container margin__top--15 border__bottom" id="coins" >
        <h2 class="golden-item--header font-thin-italic golden-color shining__borders">Golden coins:</h2>
        
        <figure class="golden-item eagle" id="1">
          <img src="./images/eagle.jpg" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$1749.33</h3>
          <a class="golden-item--link"
            >American Eagle 1 oz.</a
          >
        </figure>
        <figure class="golden-item kangaroo" id="2">
          <img src="./images/kangaroo.jpg" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$1822.46</h3>
          <a class="golden-item--link"
            >Australian Kangaroo 1 oz.</a
          >
        </figure>
        <figure class="golden-item philharmonic" id="3">
          <img src="./images/philharmonic.jpg" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$1781.98</h3>
          <a class="golden-item--link"
            >Vienna Philharmonic 1 oz.</a
          >
        </figure>
        <figure class="golden-item krugerand" id="4">
          <img src="./images/krugerand.jpg" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$1781.98</h3>
          <a class="golden-item--link"
            >Krugerrand 1 oz.</a
          >
        </figure>
        <figure class="golden-item lipa" id="5">
          <img src="./images/lipa.jpg" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$1781.98</h3>
          <a class="golden-item--link"
            >Canadian Maple Leaf 1 oz.</a
          >
        </figure>
        <figure class="golden-item bison" id="6">
          <img src="./images/bison.jpg" alt="" class="golden-item--image" />
          <h3 class="golden-item--price">$1781.98</h3>
          <a class="golden-item--link"
            >American Buffalo 1 oz.</a
          >
        </figure>
      </section>
  
      <section class="golden-bars__container margin__top--15 border__bottom" id="bars">
        <h2 class="golden-item--header font-thin-italic golden-color shining__borders">Golden bars:</h2>
  
        <figure class="golden-item sztabka" id="7">
          <img src="./images/sztabka.jpg" alt="" class="golden-item--image" />
          <p class="golden-item--price">$529.33</p>
          <a class="golden-item--link"
            >Golden Bar 10g</a
          >
        </figure>
        <figure class="golden-item sztabka" id="8">
          <img src="./images/sztabka.jpg" alt="" class="golden-item--image" />
          <p class="golden-item--price">$529.33</p>
          <a class="golden-item--link"
            >Golden Bar 1oz</a
          >
        </figure>
      </section>
    </main>`
  }
}

export default new HomePageView()
