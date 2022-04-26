class ModalView {
  renderInformation(allAddedAmount, summaryToPay) {
    //   document.body.prepend()
    console.log(`You've bought ${allAddedAmount} worth $${summaryToPay}`)
  }
}

export default new ModalView()
