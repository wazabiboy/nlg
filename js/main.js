// main.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker enregistré avec succès:', registration);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement du Service Worker:', error);
      });
  }
  

  // main.js
if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // Autorisation accordée, vous pouvez maintenant afficher des notifications
      }
    });
  }
  


  // main.js
if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('Nouvelle Notification', {
          body: 'Contenu de la notification',
          icon: 'images/icon.png'
        });
      }
    });
  }
  