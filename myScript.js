// Get the button:
let mybutton = document.getElementById("myBtn");
var initialPosition = 0;

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const currentPosition = document.documentElement.scrollTop;
    const scrollDown = initialPosition - currentPosition < 0 
    initialPosition = document.documentElement.scrollTop

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 && scrollDown) {
    return(mybutton.style.display = "block")
  } 
  // Scrolling up hides the button 
  if (!scrollDown) {
    return(mybutton.style.display = "none")
  }
  mybutton.style.display = "none";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
