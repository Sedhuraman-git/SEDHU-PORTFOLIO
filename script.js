// Select the menu icon and navigation links
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

// Add click event listener to the menu icon
menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x'); // Toggle class on the menu icon
    nav.classList.toggle('active'); // Toggle class on the navigation links
});



/*const menu = document.querySelector("menu");
const nav = document.querySelector(".links");

menu.ulonclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}*/
