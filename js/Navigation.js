import { hamburger, nav, navHeight, goldCourseHeight } from "./Data.js"
import { renderTermsAndConditions } from "./SiteRendering/RenderProduct.js"

export const showNavigation = () => {
  hamburger.classList.toggle("hamburger__active")
  if (nav.style.top === `-${navHeight - goldCourseHeight}px`)
    nav.style.top = `0px`
  else if (nav.style.top === `0px`)
    nav.style.top = `-${navHeight - goldCourseHeight}px`
}

export function hideNavigation() {
  nav.style.top = `-${navHeight - goldCourseHeight}px`
}

export const goToSection = (e) => {
  e.preventDefault()
  const scrollTarget = document.getElementById(e.target.dataset.option)
  const scrollY = -25

  if (e.target.dataset.option === "terms") renderTermsAndConditions()

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

  hamburger.classList.toggle("hamburger__active")
  hideNavigation()
}
