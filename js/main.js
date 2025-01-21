window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('Service Worker registered successfully.'))
    .catch((error) => console.error('Service Worker registration failed:', error));
    }
   };
// Load content dynamically based on hash
function loadPage(page) {
    const app = document.getElementById('app');
    fetch(`pages/${page}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Page not found');
        }
        return response.text();
      })
      .then(content => {
        app.innerHTML = content;
      })
      .catch(error => {
        app.innerHTML = '<h1>404 - Page Not Found</h1>';
      });
  }
  
  // Handle hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1) || 'home';
    loadPage(hash);
  });
  
  // Initial load
  window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1) || 'home';
    loadPage(hash);
  });
  