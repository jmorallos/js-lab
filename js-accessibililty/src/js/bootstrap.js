export function initializeApp() {
  const root = document.getElementById('app');

  if(!root) {
    throw new Error('Root element (#app) not found in DOM');
  }
  return root;
}