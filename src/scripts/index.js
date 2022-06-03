import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/components/appbar-element';
import './views/components/hero-element';
import './views/components/article-element';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
