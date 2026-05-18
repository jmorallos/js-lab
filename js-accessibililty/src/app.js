import { initializeApp } from '../src/js/bootstrap.js';
import { createAppShell } from '../src/js/appshell.js';

try {
  const root = initializeApp();
  const appShell = createAppShell();
  root.append(appShell);
} catch (error) {
  console.error('Application initialization failed:', error);
  document.body.innerHTML = /* html */ `<p>Sorry, the application failed to load.</p>`;
}