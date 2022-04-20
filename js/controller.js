import HomePageView from "./views/HomePageView.js"
import ProductPageView from "./views/ProductPageView.js"
import TermscondPageView from "./views/TermscondPageView.js"
import * as model from "./model.js"

const hamburger = document.querySelector(".center")
const nav = document.querySelector(".nav")
const goldCourse = nav.querySelector(".nav__gold-course")

const navHeight = nav.clientHeight
const goldCourseHeight = goldCourse.clientHeight

const listContainer = document.querySelector(".list__container")
const header = document.querySelector("header")

const overlay = document.querySelector(".overlay")
const addedToCart = document.querySelector(".added-to-cart")
const closeModalButton = document.querySelector(".btn--close")

/* Navigation controls */

const showNavigation = () => {
  hamburger.classList.toggle("hamburger__active")
  if (nav.style.top === `-${navHeight - goldCourseHeight}px`)
    nav.style.top = `0px`
  else if (nav.style.top === `0px`)
    nav.style.top = `-${navHeight - goldCourseHeight}px`
}

const hideNavigation = () => {
  nav.style.top = `-${navHeight - goldCourseHeight}px`
}

/* Navigation list */

const goToSection = (e) => {
  e.preventDefault()
  const scrollTarget = document.getElementById(e.target.dataset.option)
  const scrollY = -25

  if (e.target.dataset.option === "terms")
    TermscondPageView.renderTermsCondPage()

  if (!scrollTarget) return

  scrollTarget.previousElementSibling
    ? window.scrollTo({
        top: `${
          scrollTarget.getBoundingClientRect().top + scrollY + window.scrollY
        }`,
        behavior: "smooth",
      })
    : window.scrollTo({
        top: `${
          document.querySelector("header").getBoundingClientRect().bottom +
          window.scrollY
        }`,
        behavior: "smooth",
      })

  hamburger.classList.remove("hamburger__active")
  hideNavigation()
}

/* Go to product */

const goToProduct = (e) => {
  const closestFigure = e.target.closest("figure")
  if (!closestFigure) return

  closestFigure.id && e.target.nodeName === "A"
    ? getProductById(closestFigure.id)
    : false
}

const getProductById = (id) => {
  const clickedProductData = model.products.find(
    (product) => product.id === +id
  )

  ProductPageView.renderProductPage(clickedProductData)
}

/* Initial event handling */
const init = () => {
  HomePageView.renderMainPage() // always first
  HomePageView.addClickedProductHandler(goToProduct)
  hamburger.addEventListener("click", showNavigation)
  listContainer.addEventListener("click", goToSection)
  document.body.addEventListener("click", goToProduct)
}

init()

hideNavigation()

/* Cart view */
/* 
 contentWrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) 
    ;[addedToCart, overlay].forEach((el) => el.classList.remove("hidden"))} */
