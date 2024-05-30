document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const menu = document.getElementById('menu');
    const cancel = document.getElementById('cancel');
    const menubar = document.getElementById('menubar');

    // Check if elements are selected correctly
    if (!menu) {
      console.error('Menu button not found!');
    }
    if (!cancel) {
      console.error('Cancel button not found!');
    }
    if (!menubar) {
      console.error('Menubar not found!');
    }

    // Ensure elements exist before adding event listeners
    if (menu && menubar) {
      // Event listener for menu button to show the menubar
      menu.addEventListener('click', () => {
        menubar.classList.remove('hidden', 'translate-x-52');
        menubar.classList.add('block', 'translate-x-0');
        document.querySelector('#span').classList.add('hidden');
      });
    }

    if (cancel && menubar) {
      // Event listener for cancel button to hide the menubar
        cancel.addEventListener('click', () => {
            menubar.classList.remove('block', 'translate-x-0');
            menubar.classList.add('hidden', 'translate-x-52');
            // Add hidden class after the transition ends
            menubar.addEventListener('transitionend', () => {
                menubar.classList.add('hidden');
            }, { once: true });
        document.querySelector('#span').classList.remove('hidden');

        });
    }
  });