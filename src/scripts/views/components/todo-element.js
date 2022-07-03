class TodoElement extends HTMLElement {
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
        <div class="wrapper">
            <div class="container bg-white shadow" id="add-todo">
                <h2 class="container-header text-center">Add Things You Need To Do</h2>
                <form class="form" action="#" id="form">
                    <div class="form-group form-title">
                        <label for="title">Add Things You Need To Do</label>
                        <input type="text" id="title" name="title" required>
                    </div>
                    <div class="form-group form-title">
                        <label for="date">Set Dateline</label>
                        <input type="date" id="date" name="date" required>
                    </div>
                    <input type="submit" value="Submit" name="Submit" class="btn-submit">
                </form>
            </div>
    
            <div class="container">
                <h2 class="container-header">What Needs To Do</h2>
                <div class="list-item" id="todos">
                    
                </div>
            </div>
    
            <div class="container">
                <h2 class="container-header">What Has Been Done</h2>
                <div class="list-item" id="completed-todos">
                    
                </div>
            </div>
        </div>
              `;
  }
}
customElements.define('todo-element', TodoElement);


