//Get the button:
btn = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
        btn.classList.add("show")
    } else {
        btn.classList.remove("show");
    }


    //if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
        //button.style.display = "none";
    //} else {
        //button.style.display = "block";
    //}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}