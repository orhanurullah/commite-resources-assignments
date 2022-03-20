/**
 * Variables html elements
 */
const closeButon = document.querySelector('#closebuton');
const openButon = document.querySelector('#openbuton');

/**
 * Close button event listener
 * change style with and z-index value
 */
closeButon.addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar-nav');
    sidebar.style.width = 0;
    sidebar.style.zIndex = 0;
});

/**
 * Open button event listener
 * 
 */

openButon.addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar-nav');
    sidebar.style.width = "15%";
    sidebar.style.zIndex = 1;
});

const height = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
console.log(height);
