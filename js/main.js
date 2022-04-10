import { showNavigation, hamburger } from "./Navigation.js"
import goldAPI from "./GoldAPI.js"
import { goBack, buttonGoBack } from "./GoBack.js"

hamburger.addEventListener("click", showNavigation)
//  goldAPI()

buttonGoBack.addEventListener("click", goBack)
