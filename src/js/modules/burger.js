const burger = (burgerSelector, menuSelector) => {
    const menu = document.querySelector(menuSelector),
          burgerItem = document.querySelector(burgerSelector);
    
    menu.style.display = 'none';

    burgerItem.addEventListener('click', () => {
        if (menu.style.display === 'none' && window.screen.availWidth < 993) {
            menu.style.display = 'block';
            menu.classList.add('animated', 'fadeIn');
            menu.classList.remove('fadeOut');
        } else {
            menu.classList.remove('fadeIn');
            menu.classList.add('fadeOut');
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = 'none';
            menu.classList.remove('fadeIn');
            menu.classList.add('fadeOut');
        }
    });
};

export default burger;