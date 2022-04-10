const increaseAmountBtn = document.querySelector(".increase")
const decreaseAmountBtn = document.querySelector(".decrease")
const amountContainer = document.querySelector(".golden-item__product--amount")

const onChangeAmount = (e) => {
  if (e.target === increaseAmountBtn) {
    e.target.previousElementSibling.value > 9
      ? e.target.previousElementSibling.value
      : e.target.previousElementSibling.value++
  } else if (e.target === decreaseAmountBtn) {
    e.target.nextElementSibling.value < 2
      ? e.target.nextElementSibling.value
      : e.target.nextElementSibling.value--
  }
}

export { amountContainer, onChangeAmount }
