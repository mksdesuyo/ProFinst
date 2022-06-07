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
                    <li><a href="/">Home</a></li>
                    <li><a href="#/about">About Us</a></li>
                    <a hidden id="user-name"></a>
                    <a class="profinst" id="login" href="#/login">Log In</a>
                    <a class="profinst" hidden id="logout">Log Out</a>
                </ul>
            </nav>
        </div>`;
  }
}
customElements.define('app-bar', AppbarElement);
