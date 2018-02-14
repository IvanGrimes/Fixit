/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("main").style.position = "relative";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.right = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("main").style.position = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.right = "0";
}
