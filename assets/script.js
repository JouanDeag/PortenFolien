// Add nav.html to the DOM
const navHTML = fetch('assets/components/nav/nav.html').then(response => response.text());
navHTML.then(html => document.querySelector('body').insertAdjacentHTML('afterbegin', html));

// Add nav.js
const navJS = fetch('assets/components/nav/nav.js').then(response => response.text());
navJS.then(js => eval(js));

const fem = `______ _____ ______ __  __            _____ 
|  ____|_   _|  ____|  \\\/  |          | ____|
| |__    | | | |__  | \\  / |  ______  | |__  
|  __|   | | |  __| | |\\\/| | |______| |___ \\ 
| |     _| |_| |____| |  | |           ___) |
|_|    |_____|______|_|  |_|          |____/                                 
`

const showFem = () => {
    console.log(fem);
}

showFem();

/* Handle the bouncing animation of the hello text */

// Get the text to animate
const hello = document.querySelector('#hello');

// Create an array of spans with the letters of the text
elementsToAdd = [...hello.innerText].map((letter, index) => `<span class="bouncing" style="animation-delay: ${index * 50}ms;">${letter}</span>`).join('');

// Add the spans to the DOM
hello.innerHTML = elementsToAdd;

