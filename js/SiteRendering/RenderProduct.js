import { products, contentWrapper, goBackButton, hamburger } from "../Data.js"
import { hideNavigation, showNavigation } from "../Navigation.js"

let productQuantity = 3

export const goToProduct = (e) => {
  const closestFigure = e.target.closest("figure")
  if (!closestFigure) return

  closestFigure.id && e.target.nodeName === "A"
    ? renderProduct(closestFigure.id)
    : false
}

const renderProduct = (id) => {
  goBackButton.classList.toggle("hidden")

  if (hamburger.classList.contains("hamburger__active")) showNavigation()

  const clickedProduct = products.find((product) => product.id === +id)

  contentWrapper.innerHTML = ``

  let html = `
<figure class="golden-item__product ${clickedProduct.shortcut} border__bottom" id=${clickedProduct.id}>
  <img src="../images/coinsNbars/${clickedProduct.shortcut}.jpg" alt="" class="golden-item__product--image margin__top--15" />
  <h3 class="golden-item__product--price">$1749.33</h3>
  <p class="golden-item__product--title">${clickedProduct.name}<p>
  <div class="golden-item__product--amount flex--center font-thin-italic">
    <h3>Amount:</h3>
    <button class="decrease font-weight-700">-</button>
    <input type="number" value="${productQuantity}" step="1" min="1" max="10">
    <button class="increase font-weight-700">+</button>
    </div>
  <button class="add-to-cart golden-color shining__borders">Add to cart <i class="fas fa-shopping-cart"></i></button>
</figure>
    
<section class="product__about border__bottom">
  <h2 class="product__about--header font-thin-italic flex--center golden-color shining__borders">${clickedProduct.name}</h2>
  ${clickedProduct.description}
  <br>
  <h3 class="product__about--description">It's great reflection of humans <span class="golden-color">richness</span>. Get it before others will!</h3>
</section>  
`
  contentWrapper.insertAdjacentHTML("beforeend", html)

  window.scrollTo({ top: 0 })
}

export const renderTermsAndConditions = () => {
  goBackButton.classList.contains("hidden") &&
    goBackButton.classList.toggle("hidden")

  contentWrapper.innerHTML = ``

  const html = `
  <section class="terms_and_conditions border__bottom">
  <h2 class="terms_and_conditions--header font-thin-italic flex--center golden-color shining__borders">Terms and Conditions</h2>
  <h3 class="terms_and_conditions--paragraph font-thin-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita iste obcaecati iusto deleniti ipsum blanditiis corporis optio accusantium eos, quasi delectus quidem nihil. Quasi, consequuntur sapiente? Alias tempora doloremque molestias minima recusandae, iste saepe veritatis deleniti quidem. Dolores ratione inventore eos labore beatae, eaque ut dolorum libero quibusdam? Excepturi quasi voluptas, facere, quisquam quia esse quaerat recusandae iste est doloribus doloremque laborum facilis natus commodi, adipisci veritatis consectetur sunt quis tenetur eius? Sequi, totam ab dicta nulla molestiae eos. Ducimus possimus repudiandae cumque facilis similique, perspiciatis aliquid recusandae sapiente quidem veritatis, nam porro pariatur enim omnis illo necessitatibus vel doloribus molestias quae blanditiis fugiat eius vero adipisci voluptates. Vel accusamus iste libero, possimus neque iusto. Voluptatem, dolor repudiandae magni atque nihil id aliquam necessitatibus. Repellat, molestias amet? Praesentium eius, quidem officia sunt neque laborum magnam expedita id corrupti debitis fuga vel aut nobis culpa illo sint magni! Quod ex dolor rem. Porro odio quia dicta commodi hic itaque doloremque tenetur eius fugit, dignissimos sint dolores, atque harum a. Deserunt maxime harum soluta. Soluta est officia ipsum eveniet, enim tenetur asperiores animi saepe quidem expedita beatae odio autem nobis necessitatibus. Quos enim incidunt aliquam tempore laborum dignissimos commodi et iure rerum!</h3>
  </section>
  `

  contentWrapper.insertAdjacentHTML("beforeend", html)

  showNavigation()

  window.scrollTo({ top: 0 })
}
