const root = document.getElementById('app');
if(!root) throw new Error("Root element not found");

function renderApp() {
  root.innerHTML = '';
  const h1 = document.createElement('h1');
  h1.textContent = "Hello, World!";

  root.append(h1);
  console.log("Hello console");
  
}

renderApp();