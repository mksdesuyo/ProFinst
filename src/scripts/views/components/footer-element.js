class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>&copy; 2022 CPSG-71 | <a href="https://github.com/mksdesuyo/ProFinst" target="_blank" rel="noreferrer noopener">ProFinst</a></p>
        `;
  }
}
customElements.define('footer-element', FooterElement);

