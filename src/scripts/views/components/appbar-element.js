class AppbarElement extends HTMLElement {
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
        <div class="app-bar">
            <div class="app-bar__menu">
                <button id="hamburgerButton" aria-label="Menu Button">☰</button>
            </div>
            <div class="app-bar__brand">
                <img src="images/logo2.png" alt="ProFinst">
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>
        </div>`;
  }
}
customElements.define('app-bar', AppbarElement);
