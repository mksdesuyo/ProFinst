import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/components/appbar-element';
import './views/components/hero-element';
import './views/components/article-element';
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

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
