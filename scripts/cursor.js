const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY-15) + "px; left: " + (e.pageX-15) + "px;")
});

window.onload = addLinks;

function addLinks(){
    let links = document.querySelectorAll(".a");
    for (i=0; i<links.length; i++) {
        links[i].addEventListener('mouseover', e => {
            cursor.classList.add("link");
        });
        links[i].addEventListener('mouseout', e => {
            cursor.classList.remove("link");
        });
    }
}
