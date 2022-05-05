import HomePageView from "./js/views/HomePageView.js"
import ProductPageView from "./js/views/ProductPageView.js"
import TermscondPageView from "./js/views/TermscondPageView.js"
import * as model from "./js/model.js"
import NavigationView from "./js/views/NavigationView.js"
import ModalCartView from "./js/views/ModalCartView.js"
import CartView from "./js/views/CartView.js"
// import ModalView from "./js/views/ModalView.js"

import "./scss/style.scss"

const contentWrapper = document.querySelector(".content-wrapper")

const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")
const goldCourse = nav.querySelector(".nav__gold-course")

const overlay = document.querySelector(".overlay")
const addedToCart = document.querySelector(".added-to-cart")

let updatedItemsPrices = []

let currentProduct = null

let scrollPosition = 0

/* NAVIGATION */ /* NAVIGATION */
/* NAVIGATION */ /* NAVIGATION */

/////////////////////////////////
// Toggle/hide navigation
const toggleNavigation = () => {
  hamburger.classList.contains("hamburger__active")
    ? hamburger.classList.remove("hamburger__active")
    : hamburger.classList.add("hamburger__active")

   if (nav.classList.contains("hiddenNav")) nav.classList.remove("hiddenNav")
  else nav.classList.add("hiddenNav")
}

/////////////////////////////////
// Go to scroll position saved in scrollPosition variable
const goToCurrentScrollPosition = (value) => {
  window.scrollTo({ top: value })
}

/////////////////////////////////
// Navigation list behaviour
const goToSection = (e) => {
  e.preventDefault()
  const scrollTarget = document.getElementById(e.target.dataset.option)
  const scrollY = -25

  if (e.target.dataset.option === "terms") {
    toggleNavigation()
    TermscondPageView.renderTermsCondPage()
  }

  if (e.target.closest("li").dataset.option === "shopping-cart") {
    toggleNavigation()
    renderCartController()
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

/* GO BACK MAIN PAGE BUTTON AND LOGIC */ /* GO BACK MAIN PAGE BUTTON AND LOGIC */
/* GO BACK MAIN PAGE BUTTON AND LOGIC */ /* GO BACK MAIN PAGE BUTTON AND LOGIC */

/////////////////////////////////
// Go back main page button
const goBackMainPage = () => {
  if (
    contentWrapper.children[0].classList[0] === "terms_and_conditions" ||
    contentWrapper.children[0].classList[0] === "about_us"
  )
    scrollPosition = 0

  HomePageView.renderMainPage()
  goToCurrentScrollPosition(scrollPosition)
}

/* CART VIEW/CONTROLLING */ /* CART VIEW/CONTROLLING */
/* CART VIEW/CONTROLLING */ /* CART VIEW/CONTROLLING */

/////////////////////////////////
// Getting information about summary amount of all products and price to pay from them -- HELPER FUNCTION
const getAmountAndSummaryToPay = () => {
  const allAddedAmount = model.shoppingCart.reduce(
    (acc, cur) => acc + cur.amount,
    0
  )

  const summaryToPay = model.shoppingCart.reduce(
    (acc, cur) => acc + cur.amount * +cur.price.toFixed(2),
    0
  )

  return { summaryToPay, allAddedAmount }
}

/////////////////////////////////
//Rendering Cart - hiding modal and rendering products list
const renderCartController = () => {
  if (!overlay.classList.contains("hidden")) {
    ;[addedToCart, overlay].forEach((el) => el.classList.add("hidden"))
  }

  const cartData = getAmountAndSummaryToPay()

  CartView.renderCart(cartData.allAddedAmount, cartData.summaryToPay)
  CartView.renderListItem(model.shoppingCart)
}

/////////////////////////////////
// Removing item from shopping cart in view/DOM, in model logic containing items in cart and re-rendering products list
const removeItemFromShoppingCart = (e) => {
  if (!e.target.closest("button")) return
  if (e.target.closest("button").classList.contains("remove-item")) {
    const searchedItem = e.target.closest(`li`)
    CartView.removeListItem(searchedItem)

    const removedItemIndex = model.shoppingCart.findIndex(
      (item) => item.product.id === +searchedItem.id
    )
    model.shoppingCart.splice(removedItemIndex, 1)

    const cartData = getAmountAndSummaryToPay()

    CartView.renderCart(cartData.allAddedAmount, cartData.summaryToPay)
    CartView.renderListItem(model.shoppingCart)
  }
}

const clearListItemsHelper = () => {
  model.shoppingCart.splice(0)
  CartView.renderCart(0, 0)
}

const orderListItems = (e) => {
  if (!e.target === "button") return
  if (e.target.classList.contains("cart__container--buttons--order")) {
    const cartData = getAmountAndSummaryToPay()
    ModalView.renderInformation(cartData.allAddedAmount, cartData.summaryToPay)

    clearListItemsHelper()
  }
}

const clearListItems = (e) => {
  if (!e.target === "button") return
  if (e.target.classList.contains("cart__container--buttons--clear")) {
    clearListItemsHelper()
  }
}

/* HOME PAGE VIEW/CONTROLLING */ /* HOME PAGE VIEW/CONTROLLING */
/* HOME PAGE VIEW/CONTROLLING */ /* HOME PAGE VIEW/CONTROLLING */

/////////////////////////////////
// Checking if clicked product is an anchor and his closest figure on main page has an id
const goToProduct = (e) => {
  const closestFigure = e.target.closest("figure")
  if (!closestFigure) return

  closestFigure.id && e.target.nodeName === "A"
    ? getProductById(closestFigure.id)
    : false
}

/////////////////////////////////
// Comparing clicked product's id with all products in model --> returns wanted product and renders it. Also, this function is saving currentProduct in variable for being reused in another functions
const getProductById = (id) => {
  const clickedProductData = model.products.find(
    (product) => product.id === +id
  )

  currentProduct = clickedProductData

  hamburger.classList.contains("hamburger__active") && toggleNavigation()

  scrollPosition = window.scrollY

  ProductPageView.renderProductPage(clickedProductData, updatedItemsPrices)
}

/* MODAL VIEW/CONTROLLING AND ADDING ITEM TO CART */ /* MODAL VIEW/CONTROLLING AND ADDING ITEM TO CART */
/* MODAL VIEW/CONTROLLING AND ADDING ITEM TO CART */ /* MODAL VIEW/CONTROLLING AND ADDING ITEM TO CART */

/////////////////////////////////
// Showing modal and adding to cart
const showModalAndAddToCart = (e) => {
  if (!e.target.classList.contains("add-to-cart")) return

  //Getting amount-input's value and reseting error message
  const amountInputValue = document.querySelector(".amount-input").value
  document.querySelector(".error-amount--container").innerHTML = ``

  if (amountInputValue > 10 || amountInputValue < 1) {
    const errorElement = document.createElement("p")
    errorElement.textContent = `Incorrect amount. Choose between 1-10.`
    return document
      .querySelector(".error-amount--container")
      .appendChild(errorElement)
  }

  ;[addedToCart, overlay].forEach((el) => el.classList.remove("hidden"))
  ModalCartView.displayCurrentlyAddedAmount(amountInputValue)

  /* Function is checking if shopping cart already contains just added item to cart - if does, finds this item in array and icreases its amount by current value / if not, creates new product with necessary data */
  if (
    model.shoppingCart.some(
      (product) => product.product.id === currentProduct.id
    )
  ) {
    const alreadyExistingItem = model.shoppingCart.find(
      (product) => product.product.id === currentProduct.id
    )
    alreadyExistingItem.amount += +amountInputValue
  } else {
    model.shoppingCart.push({
      product: currentProduct,
      amount: +amountInputValue,
      price:
        currentProduct.feeRatio *
        +JSON.parse(localStorage.getItem("Gold Data and Price")).price,
    })
  }

  const cartData = getAmountAndSummaryToPay()

  ModalCartView.displayAllAddedAmount(cartData.allAddedAmount)
}

/////////////////////////////////
// Closing modal
const closeModal = (e) => {
  if (e.target.classList.contains("btn--close"))
    [addedToCart, overlay].forEach((el) => el.classList.add("hidden"))
  else return
}

/* FETCHING AND OPERATING ON GOLD DATA */ /* FETCHING AND OPERATING ON GOLD DATA */
/* FETCHING AND OPERATING ON GOLD DATA */ /* FETCHING AND OPERATING ON GOLD DATA */

/////////////////////////////////
// Fetching gold data, operating on localStorage, simulating periodicity of getting data from server
const updateGoldData = async () => {
  // Checking if gold data exist in localStorage
  const goldDataPriceLS = JSON.parse(
    localStorage.getItem("Gold Data and Price")
  )

  // Getting current time in miliseconds and transforming it to 10-digit
  const nowTimestamp = new Date().getTime()
  const nowTimestamp10Digits = +`${nowTimestamp}`.slice(0, 10)

  /* Comparing todays data and data in locaStorage, if exists and is less than 24h - it renders gets data from localStorage, if exists and is more than 24h - it fetches is from server, if doesn't exist (equal to object(null) or undefined), also fetches from server */
  if (
    typeof goldDataPriceLS?.date === "object" ||
    typeof goldDataPriceLS?.date === "undefined" ||
    (typeof goldDataPriceLS.date === "number" &&
      goldDataPriceLS.date + 86400 < nowTimestamp10Digits)
  ) {
    const gold = await model.goldAPI()
    const { date, price } = gold

    // Creating nice string of information about date of fetching
    const dateWhenFetched = new Date(date * 1000).toISOString().split("T")
    const readyDateStringFromFetching = `${
      dateWhenFetched[0]
    } ${dateWhenFetched[1].slice(0, 8)}Z`

    // Saving date and price to localStorage
    localStorage.setItem(
      "Gold Data and Price",
      JSON.stringify({
        date: readyDateStringFromFetching,
        price: price.toFixed(2),
      })
    )

    // Setting price and data information according to fetched data
    NavigationView.setGoldCourseData(
      readyDateStringFromFetching,
      price.toFixed(2)
    )

    setItemsPrice(price.toFixed(2))

    console.log("fetching")
  } else {
    // Setting price and data according to data in local storage
    NavigationView.setGoldCourseData(
      goldDataPriceLS.date,
      goldDataPriceLS.price
    )

    setItemsPrice(goldDataPriceLS.price)

    console.log("localstorage")
  }
}

// Setting price of all items dynamically, according to fee in model products array (re-rendering product view)
const setItemsPrice = (pricePerOunce) => {
  const itemsPrices = model.products.map((obj) => {
    const itemPrice = obj.feeRatio * pricePerOunce
    return [obj.id, itemPrice.toFixed(2)]
  })

  HomePageView.renderCurrentPrices(itemsPrices)

  updatedItemsPrices = [...itemsPrices]
}

/* Initial event handling */
const init = () => {
  HomePageView.renderMainPage()
  HomePageView.addClickedProductHandler(goToProduct)

  ProductPageView.addGoBackHandler(goBackMainPage)
  TermscondPageView.addGoBackHandler(goBackMainPage)

  NavigationView.addShowNavHandler(toggleNavigation)
  NavigationView.addGoToSectionHandler(goToSection)

  ModalCartView.addShowModalHandler(showModalAndAddToCart)
  ModalCartView.addCloseModalHandler(closeModal)
  ModalCartView.addGoToCartHandler(renderCartController)

  CartView.addRemoveItemFromShoppingCartHandler(removeItemFromShoppingCart)
  CartView.addOrderListItemsHandler(orderListItems)
  CartView.addClearListItemsHandler(clearListItems)

  window.addEventListener("load", updateGoldData)
}

init()
