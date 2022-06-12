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

const darkMode = document.querySelector('.theme-toggle-button');
const darkAppBar = document.querySelector('.app-bar');
const darkNavBar = document.querySelector('.app-bar__navigation');
const darkHamButton = document.querySelector('.hamburgerButton');
const darkFooter = document.querySelector('footer');

darkMode.addEventListener('click', function handleClick() {
  document.body.classList.toggle('dark');
  darkMode.classList.toggle('dark');
  darkAppBar.classList.toggle('dark');
  darkNavBar.classList.toggle('dark');
  darkHamButton.classList.toggle('dark');
  darkFooter.classList.toggle('dark');
});
