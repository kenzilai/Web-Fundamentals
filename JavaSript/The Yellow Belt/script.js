// Navbar Below
function hide(element) {
    element.remove();
}
// Navbar Above

// Loved Button Below
function addLike(lovedElement) {
    document.querySelector(lovedElement).innerHTML++;
    // var x = document.querySelector(lovedElement);
    // x.innerHTML++;
    // console.log(document.querySelector('#foo').innerHTML);
}
// Loved Button Above

// const document = {... , ... , ...} <- Premade global Object
function addLike(lovedElement) {document.querySelector(lovedElement).innerHTML++;}
// Function ______(input, ...) {refer global var/const + pre-made function() + refer to the element inside of the DOM}