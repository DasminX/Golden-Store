import HomePageView from "./views/HomePageView.js"
import ProductPageView from "./views/ProductPageView.js"
import TermscondPageView from "./views/TermscondPageView.js"
import * as model from "./model.js"
import NavigationView from "./views/NavigationView.js"
import ModalCartView from "./views/ModalCartView.js"

const hamburger = document.querySelector(".center")
const nav = document.querySelector(".nav")
const goldCourse = nav.querySelector(".nav__gold-course")
const navHeight = nav.clientHeight
const goldCourseHeight = goldCourse.clientHeight

const overlay = document.querySelector(".overlay")
const addedToCart = document.querySelector(".added-to-cart")
const closeModalButton = document.querySelector(".btn--close")

/* Show/Hide Navigation */

const toggleNavigation = () => {
  hamburger.classList.contains("hamburger__active")
    ? hamburger.classList.remove("hamburger__active")
    : hamburger.classList.add("hamburger__active")

  if (nav.style.top === `-${navHeight - goldCourseHeight}px`)
    nav.style.top = `0px`
  else if (nav.style.top === `0px`)
    nav.style.top = `-${navHeight - goldCourseHeight}px`
}

const hideNavigationInit = () => {
  nav.style.top = `-${navHeight - goldCourseHeight}px`
}

/* Navigation list behaviour */

const goToSection = (e) => {
  e.preventDefault()
  const scrollTarget = document.getElementById(e.target.dataset.option)
  const scrollY = -25

  if (e.target.dataset.option === "terms") {
    toggleNavigation()
    TermscondPageView.renderTermsCondPage()
  }

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

  toggleNavigation()
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

  hamburger.classList.contains("hamburger__active") && toggleNavigation()

  ProductPageView.renderProductPage(clickedProductData)
}

/* Go back to main page */

const goBackMainPage = () => {
  HomePageView.renderMainPage()
}

/* Show/Close modal */

const showModal = (e) => {
  e.target.classList.contains("add-to-cart")
    ? [addedToCart, overlay].forEach((el) => el.classList.remove("hidden"))
    : null
}

const closeModal = (e) => {
  e.target.classList.contains("btn--close")
    ? [addedToCart, overlay].forEach((el) => el.classList.add("hidden"))
    : null
}

/* UPDATE GOLD DATA */

const updateGoldData = async () => {
  const goldDataPriceLS = JSON.parse(
    localStorage.getItem("Gold Data and Price")
  )

  const today = new Date().toISOString().split("T")[0]

  if (goldDataPriceLS.data !== today) {
    const gold = await model.goldAPI()
    localStorage.setItem(
      "Gold Data and Price",
      JSON.stringify({ data: gold.data, cena: gold.cena.toFixed(2) })
    )

    /* jako argumenty do funkcji wrzucamy wynik zmiennej gold */
    /* setGoldCourseData()
    setItemsPrice() */
  } else {
    /* jako argumenty do funkcji wrzucamy wynik pozyskany z LS  */
    /*  setGoldCourseData()
    setItemsPrice() */
  }
}

/* Initial event handling */
const init = () => {
  HomePageView.renderMainPage()
  HomePageView.addClickedProductHandler(goToProduct)

  ProductPageView.addGoBackHandler(goBackMainPage)
  TermscondPageView.addGoBackHandler(goBackMainPage)

  NavigationView.addShowNavHandler(toggleNavigation)
  NavigationView.addGoToSectionHandler(goToSection)

  document.body.addEventListener("click", goToProduct)

  ModalCartView.addShowModalHandler(showModal)
  ModalCartView.addCloseModalHandler(closeModal)

  window.addEventListener("load", updateGoldData)
}

init()
hideNavigationInit()
