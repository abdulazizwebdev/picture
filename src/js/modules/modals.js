const modals = () => {
    function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close  = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
            windows.forEach(item => {
                item.style.display = 'none';
            });
        } );

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal(modal);
            }
        });

        function closeModal (selector) {
            selector.style.display = 'none';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
        }
    
        function openModal(selector) {
            selector.style.display = 'block';
            document.body.classList.add('modal-open');
            document.body.style.marginRight = `${scroll}px`;
        }
    }

    function showModalByTime (selector, time) {
        setTimeout(() => {
            let display;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.classList.add('modal-open');
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModals('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    
    showModalByTime('.popup-consultation', 60000);
};

export default modals;