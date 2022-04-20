class TermsCondPageView {
  #contentWrapper = document.querySelector(".content-wrapper")
  #goBackButton = document.querySelector(".go-back--btn")
  #hamburger = document.querySelector(".center")

  /* TODO: */
  addHandlerRender(handler) {
    this.#goBackButton.addEventListener("click", handler)
  }

  renderTermsCondPage() {
    this.#contentWrapper.innerHTML = ``

    this.#goBackButton.classList.contains("hidden") &&
      this.#goBackButton.classList.remove("hidden")

    const markup = this.#generateMarkup

    this.#contentWrapper.insertAdjacentHTML("beforeend", markup)

    // this.#hamburger.classList.contains("hamburger__active") && showNavigation()
    window.scrollTo({ top: 0 })
  }

  #generateMarkup() {
    ;`
    <section class="terms_and_conditions border__bottom">
    <h2 class="terms_and_conditions--header font-thin-italic flex--center golden-color shining__borders">Terms and Conditions</h2>
    <h3 class="terms_and_conditions--paragraph font-thin-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita iste obcaecati iusto deleniti ipsum blanditiis corporis optio accusantium eos, quasi delectus quidem nihil. Quasi, consequuntur sapiente? Alias tempora doloremque molestias minima recusandae, iste saepe veritatis deleniti quidem. Dolores ratione inventore eos labore beatae, eaque ut dolorum libero quibusdam? Excepturi quasi voluptas, facere, quisquam quia esse quaerat recusandae iste est doloribus doloremque laborum facilis natus commodi, adipisci veritatis consectetur sunt quis tenetur eius? Sequi, totam ab dicta nulla molestiae eos. Ducimus possimus repudiandae cumque facilis similique, perspiciatis aliquid recusandae sapiente quidem veritatis, nam porro pariatur enim omnis illo necessitatibus vel doloribus molestias quae blanditiis fugiat eius vero adipisci voluptates. Vel accusamus iste libero, possimus neque iusto. Voluptatem, dolor repudiandae magni atque nihil id aliquam necessitatibus. Repellat, molestias amet? Praesentium eius, quidem officia sunt neque laborum magnam expedita id corrupti debitis fuga vel aut nobis culpa illo sint magni! Quod ex dolor rem. Porro odio quia dicta commodi hic itaque doloremque tenetur eius fugit, dignissimos sint dolores, atque harum a. Deserunt maxime harum soluta. Soluta est officia ipsum eveniet, enim tenetur asperiores animi saepe quidem expedita beatae odio autem nobis necessitatibus. Quos enim incidunt aliquam tempore laborum dignissimos commodi et iure rerum!</h3>
    </section>
    `
  }
}

export default new TermsCondPageView()
