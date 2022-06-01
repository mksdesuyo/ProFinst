class HeroElement extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="jumbotron">
            <div class="left">
                <img src="./images/logo.png">
            </div>
            <div class="right">
                <h1>PROFINST</h1>
                <p>Manajemen diri anda dan efisienkan setiap waktu anda.Ayo tingkatkan
                produktivitasmu dengan Profinst</p>
                <button class="btn-setnow" >SET NOW</button>
            </div>        
        </div>`;
    }
}
customElements.define('hero-element',HeroElement);



