/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './app';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found.',
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root,
);
