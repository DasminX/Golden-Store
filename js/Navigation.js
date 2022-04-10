export const hamburger = document.querySelector(".center")
const nav = document.querySelector(".nav")
const goldCourse = nav.querySelector(".nav__gold-course")

const navHeight = nav.clientHeight
const goldCourseHeight = goldCourse.clientHeight

const listContainer = document.querySelector(".list__container")
const header = document.querySelector("header")

export const showNavigation = () => {
  hamburger.classList.toggle("hamburger__active")
  if (nav.style.top === `-${navHeight - goldCourseHeight}px`)
    nav.style.top = `0px`
  else if (nav.style.top === `0px`)
    nav.style.top = `-${navHeight - goldCourseHeight}px`
}

function hideNav() {
  nav.style.top = `-${navHeight - goldCourseHeight}px`
}

const goToSection = (e) => {
  e.preventDefault()
  const scrollTarget = document.getElementById(e.target.dataset.option)
  const scrollY = -25

  if (!scrollTarget) return

  scrollTarget.previousElementSibling
    ? window.scrollTo({
        top: `${
          scrollTarget.getBoundingClientRect().top + scrollY + window.scrollY
        }`,
        behavior: "smooth",
      })
    : window.scrollTo({
        top: `${header.getBoundingClientRect().bottom + window.scrollY}`,
        behavior: "smooth",
      })

  hamburger.classList.toggle("hamburger__active")
  hideNav()
}

listContainer.addEventListener("click", goToSection)

hideNav()
