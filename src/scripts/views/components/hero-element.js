class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  /**
     * @param {any} event
     */
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner-left">
                <img src="./images/logo.png">
            </div>
            <div class="hero__inner-right">
                <h1>PROFINST</h1>
                <p>
                    Manajemen kegiatan kamu dan efisienkan setiap waktu kamu. Ayo tingkatkan produktivitasmu dengan Profinst!
                </p>
                <button class="btn-setnow" >SET NOW</button>
            </div>
        </div>`;
  }
}
customElements.define('hero-element', HeroElement);
