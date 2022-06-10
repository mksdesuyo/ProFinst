class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>&copy; 2022 ProFinst | CPSG-71</p>
        `;
  }
}
customElements.define('footer-element', FooterElement);

