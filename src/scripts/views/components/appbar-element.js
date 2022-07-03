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
        <div class="app-bar" id="app-bar">
            <div class="app-bar__menu">
                <button class="hamburgerButton" id="hamburgerButton" aria-label="Menu Button">☰</button>
            </div>
            <div class="app-bar__brand">
                <img src="images/logo2.png" alt="ProFinst Logo Dua">
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#/about">About Us</a></li>
                    <a hidden id="user-name"></a>
                    <a class="profinst" id="login" href="#/login">Login</a>
                    <a class="profinst" hidden id="logout">Logout</a>
                </ul>
            </nav>
        </div>`;
  }
}
customElements.define('app-bar', AppbarElement);
