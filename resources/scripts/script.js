const toggleMode = document.getElementById('toggle_button');

function changeMode() {
   const root = document.querySelector(':root');
   const body = document.querySelector('body');
    if (getComputedStyle(root).getPropertyValue('--base-color') === 'black') {
    root.style.setProperty('--base-color', 'white');
    root.style.setProperty('--text-color', 'black');
    body.style.backgroundImage = 'linear-gradient(hsla(109, 5%, 58%, 0.763), hsla(109, 5%, 58%, 0.763)), url("resources/images/Background Portfolio.webp")';
    document.querySelector('#toggle_button i').setAttribute('class', 'fa-solid fa-toggle-on');
    toggleMode.innerHTML = 'dark mode <i class="fa-solid fa-toggle-on" style="color: #ffffff;"></i>'
} else {
    root.style.setProperty('--base-color', 'black');
    root.style.setProperty('--text-color', 'white');
    body.style.backgroundImage = 'linear-gradient(hsla(0, 0%, 0%, 0.763), hsla(0, 0%, 0%, 0.763)), url("resources/images/Background Portfolio.webp")';
    document.querySelector('#toggle_button i').setAttribute('class', 'fa-solid fa-toggle-off');
    toggleMode.innerHTML = 'light mode <i class="fa-solid fa-toggle-off" style="color: #ffffff;"></i>'
}
}

toggleMode.addEventListener('click', changeMode);
