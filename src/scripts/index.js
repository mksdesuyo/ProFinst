import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/components/appbar-element';
import './views/components/hero-element';
import './views/components/article-element';
import './views/components/calendar-element';
import './views/components/footer-element';
import App from './views/app';
import './utils/auth';
import {initFirebaseAuth} from './utils/auth';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  logout: document.querySelector('#logout'),

});

initFirebaseAuth();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const anchorSelector = 'a[href^="#"]';
const anchorList = document.querySelectorAll(anchorSelector);

anchorList.forEach((link) => {
  link.onclick = function(event) {
    event.preventDefault();

    const destination = document.querySelector(this.hash);
    destination.scrollIntoView({
      behavior: 'smooth',
    });
  };
});
