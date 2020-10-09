const sliders = (selector, direction, prev, next, time = 3000) => {
    let slideIndex = 1,
        paused = false;
    const slides = document.querySelectorAll(selector);

    function showSlides(i) {
        if (i > slides.length) {
            slideIndex = 1;
        }

        if (i < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');
        });
        
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (e) {}

    function activeAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.add('slideInDown');
            }, time);
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.remove('slideInRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, time);
            
        }
    }
    activeAnimation();

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activeAnimation();
    });
    
};

export default sliders;