const products = [
  {
    name: "American Eagle 1oz",
    id: 1,
    description: `<h3 class="product__about--description"><span class="golden-color"> The American Gold Eagle</span> is a classic golden coin minted by <span class="golden-color">the US Mint</span>. Since 1986, is one of <span class="golden-color">the most popular</span> bullion coins in the world!</h3>`,
    shortcut: "eagle",
  },
  {
    name: "Australian Kangaroo 1oz",
    id: 2,
    description: `<h3 class="product__about--description"><span class="golden-color">The Australian Gold Kangaroo</span> is one of <span class="golden-color">the most recognizable</span> bullion coins in the world. Its production began in 1989, commemorating on its obverse the long-legged bagman, which is one of the symbols of <span class="golden-color">Australia</span>.</h3>`,
    shortcut: "kangaroo",
  },
  {
    name: "Vienna Philharmonic 1 oz",
    id: 3,
    description: `<h3 class="product__about--description"><span class="golden-color">Vienna Philharmonic coin</span> is Europe's first legal tender gold coin made of <span class="golden-color">genuine 24-carat gold</span> and the first with a <span class="golden-color">denomination expressed in euro</span>. This elegant coin is particularly valued for its <span class="golden-color">impeccable artistic appearance and top quality workmanship</span>.
      <span class="golden-color"></span></h3>`,
    shortcut: "philharmonic",
  },
  {
    name: "Krugerrand 1 oz",
    id: 4,
    description: `<h3 class="product__about--description"><span class="golden-color">Krugerrand</span> is undoubtedly <span class="golden-color">the most popular</span> bullion coin in the world. Struck by the South African Mint, it owes its <span class="golden-color">characteristic reddish colour</span> to a small <span class="golden-color">admixture of copper</span>, which <span class="golden-color">makes</span> the coin <span class="golden-color">harder and more resistant</span> to scratches.</h3>`,
    shortcut: "krugerand",
  },
  {
    name: "Canadian Maple Leaf 1 oz",
    id: 5,
    description: `<h3 class="product__about--description"><span class="golden-color">Canadian Maple Leaf</span> was introduced into circulation in 1979. Issuance of the coin in its first year was over 37 million copies, making it <span class="golden-color">the world's most popular 24 carat bullion coin</span>. <span class="golden-color">The pristine purity</span> of the product is evidenced by the four nines elegantly styled on the grooves radiating from the centre of the coin decorated with a maple leaf which is <span class="golden-color">Canada's most recognisable symbol</span>. The Gold Maple Leaf is one of the most famous gold coins in the world, guaranteeing an <span class="golden-color">excellent price and high liquidity</span>, making it a great addition to the investment portfolio of any person seeking <span class="golden-color">stability and independence</span>.</h3>`,
    shortcut: "lipa",
  },
  {
    name: "American Buffalo 1oz",
    id: 6,
    description: `<h3 class="product__about--description"><span class="golden-color">American Buffalo</span> - in response to the growing popularity of gold bullion coins made of gold of the <span class="golden-color">highest purity</span> in 2006, the management of the United States Mint decided to introduce the <span class="golden-color">coin of 999.9 purity</span> as <span class="golden-color">legal</span> tender in the USA.</h3>`,
    shortcut: "bison",
  },
  {
    name: "Bar 10g",
    id: 7,
    description: `<h3 class="product__about--description"><span class="golden-color">Golden Bar</span> in our offer is produced from gold of <span class="golden-color">the highest purity 999.9</span> and come from the <span class="golden-color">most prestigious mints</span>, accredited by the LBMA (London Bullion Market Association), which is a guarantee of their <span class="golden-color">highest quality and liquidity</span>.
      </h3>`,
    shortcut: "sztabka",
  },
  {
    name: "Bar 1oz",
    id: 8,
    description: `<h3 class="product__about--description"><span class="golden-color">Golden Bar</span> in our offer is produced from gold of <span class="golden-color">the highest purity 999.9</span> and come from the <span class="golden-color">most prestigious mints</span>, accredited by the LBMA (London Bullion Market Association), which is a guarantee of their <span class="golden-color">highest quality and liquidity</span>.
      </h3>`,
    shortcut: "sztabka",
  },
]

const main = document.querySelector(".main")

const goToProduct = (e) => {
  const closestFigure = e.target.closest("figure")
  if (!closestFigure) return
  closestFigure.id && e.target.nodeName === "A"
    ? renderProduct(closestFigure.id)
    : false
}

main.addEventListener("click", goToProduct)

const renderProduct = (id) => {
  const clickedProduct = products.find((product) => product.id === +id)

  document.body.innerHTML = ``

  const html = `
  <div class="center"><div></div></div>

  <nav class="nav">
  <ul class="list__container flex--column flex--center">
  <a href="" class="nav__option" data-option="about"> About us </a>
    <a href="" class="nav__option" data-option="terms"> Terms and conditions </a>
    <button class="nav__button">
    <i class="fas fa-shopping-cart" title="Go to Shopping Cart"></i>
    </button>
    </ul>

    <div class="nav__gold-course">
    <h4 class="font-thin-italic">
      Current gold rate (16:22:31):
      <!-- <span class="font-weight-700">$57.77 / 1g</span> | -->
      <span class="font-weight-700">$1,797.06 / 1oz.</span>
    </h4>
  </div>
</nav>

<button class="go-back--btn"><i class="fas fa-arrow-left"></i></button>

<figure class="golden-item__product ${clickedProduct.shortcut} border__bottom" id=${clickedProduct.id}>
<img src="../images/coinsNbars/${clickedProduct.shortcut}.jpg" alt="" class="golden-item__product--image margin__top--15" />
<h3 class="golden-item__product--price">$1749.33</h3>
      <p class="golden-item__product--title">${clickedProduct.name}<p>
      <div class="golden-item__product--amount flex--center font-thin-italic">
      <h3>Amount:</h3>
      <div class="decrease font-weight-700">-</div>
      <input type="number" value="1" step="1" min="1" max="10" readonly>
        <div class="increase font-weight-700">+</div>
        </div>
        <button class="add-to-cart golden-color shining__borders">Add to cart <i class="fas fa-shopping-cart"></i></button>
        </figure>
    
        <section class="product__about border__bottom">
        <h2 class="product__about--header font-thin-italic flex--center golden-color shining__borders">American Eagle</h2>
  ${clickedProduct.description}
  <br>
  <h3 class="product__about--description">It's great reflection of humans <span class="golden-color">richness</span>. Get it before others will!</h3>
  </section>

  <footer class="copyright golden-color">
   <h3 class="made-by font-weight-700">&copy; Made by DasminX - WebDev.</h3> 
   <h4 class="dont-copy font-thin-italic">Don't copy that, unless you want to
    hire me.</h4>
  </footer> 
  
</div>
<script type="module" src="../js/main.js"></script>
`
  document.body.insertAdjacentHTML("beforeend", html)
}

export { main, goToProduct }
