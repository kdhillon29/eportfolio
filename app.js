function openMenu() {
  document.body.classList.add("open");
}

function closeMenu() {
  document.body.classList.remove("open");
}
document.addEventListener("DOMContentLoaded", function (event) {
  // get the element to animate
  var element = document.querySelector(".header__row");
  var elementHeight = element.clientHeight; //For some reason, stackoverflow produces an error for this line

  // listen for scroll event and call animate function
  //   document.addEventListener("load", animate);
  document.addEventListener("scroll", animate);

  // check if element is in view
  function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    // var scrollPosition = scrollY + windowHeight;
    var scrollPosition = scrollY;
    // get element position (distance from the top of the page to the bottom of the element)
    const element = document.querySelector(".header__row");
    const elementHeight = element.offsetHeight;
    var elementPosition = element.getBoundingClientRect().top + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    // if (scrollPosition == 0 || !scrollY) {
    //   return true;
    // }
    if (scrollPosition > elementPosition) {
      return false;
    }
    if (scrollPosition < elementPosition) {
      return true;
    }
    return false;
  }

  // animate element when it is in view
  function animate() {
    // is element in view?
    if (inView()) {
      // element is in view, add class to element
      const element = document.querySelector(".header__row");
      element.classList.add("animate");
    } else {
      // element is not in view, remove class from element
      const element = document.querySelector(".header__row");
      element.classList.remove("animate");
    }
  }
});
