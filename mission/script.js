
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');


selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        document.body.classList.add('dark-theme');
        logo.setAttribute('src', 'images/byui-logo-dark.png');
    } else if (current === 'light') {
        document.body.classList.remove('dark-theme');
        logo.setAttribute('src', 'images/byui-logo.webp');
    }
}
