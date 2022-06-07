class CalendarElement extends HTMLElement {
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
        <div class="calendar">
          <h2 class="calendar__heading">Set Your Productivities!</h2>
        </div>
        `;
  }
}
customElements.define('calendar-element', CalendarElement);
