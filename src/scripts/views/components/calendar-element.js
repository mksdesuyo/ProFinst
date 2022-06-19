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
        <div class="calendar" id="calender">
          <h2 class="calendar__heading" id="calendar_heading">Set Your Productivities!</h2>
        </div>
        `;
  }
}
customElements.define('calendar-element', CalendarElement);
