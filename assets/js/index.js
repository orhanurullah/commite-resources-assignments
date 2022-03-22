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
 * if window object greather than 992 piksel width = 15%
 * else width = 20%
 * zIndex = 1 
 */

openButon.addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar-nav');
    if(window.innerWidth < 992){
        sidebar.style.width = "20%";
    }else{
        sidebar.style.width = "15%";
    }
    sidebar.style.zIndex = 1;
});

