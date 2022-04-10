import { showNavigation, hamburger } from "./Navigation.js"
import goldAPI from "./GoldAPI.js"
import { goBack, buttonGoBack } from "./GoBack.js"
import { amountContainer, onChangeAmount } from "./AddProductToCart.js"

hamburger.addEventListener("click", showNavigation)
//  goldAPI()

buttonGoBack.addEventListener("click", goBack)

amountContainer.addEventListener("click", onChangeAmount)
