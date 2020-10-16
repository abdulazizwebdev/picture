const checkTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(item => {
        item.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;