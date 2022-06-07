import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import {LogoutInitiator} from '../utils/auth';

class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._logout = logout;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
    LogoutInitiator.init({
      logout: this._logout,
    });
  }
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
