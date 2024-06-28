


  



  function openTab(th)
{
  window.open(th.name,'_blank');
}

document.getElementById("year").innerHTML = (new Date().getFullYear());


const header = document.querySelector(".Menu");
// const toggleClass = "is-sticky";

window.addEventListener("scroll", function() {
  const currentScroll = window.scrollY;
  // console.log(currentScroll);
  if (currentScroll > 150) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
});

// jquery code starts
$(document).ready(function() {

  $('.scrollTo').click(function() {
    // this is a getter variable.
    // We're getting the current value of the href attribute of each element with a class "scrollTo".
    var getElem = $(this).attr('href');
    // This is a variable containing an integer value.
    var targetDistance = 10;
    // Checking If the element exists on the page or not.
    if ($(getElem).length) {
        // getting the top offset of the targetted element.
        var getOffset = $(getElem).offset().top;
        // Now We can animate to our desired section using the html element.
        $('html').animate({
            scrollTop:getOffset - targetDistance
        },500);
    }
    // returning false performs three tasks when called:
    // event.preventDefault();
    // event.stopPropagation();
    // Stops callback execution and returns immediately when called.
    return false;
});
// dynamically added the back to top button.
$('body').append('<a href="#" class="back-to-top">Back to Top</a>');
var amountScrolled = $(window).height();
$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});
$('a.back-to-top').click(function(){
    $('html').animate({scrollTop:0},500);
    return false;
});

// slick init

$('.slick-demo').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  nextArrow: '<i class="fa-regular fa-circle-right rightcirclearrow"></i>',
  prevArrow: '<i class="fa-regular fa-circle-left leftcirclearrow"></i>',
});

// magnific popup init
$('.portfolio-image-popup-link').magnificPopup({type:'image'});

});



var tl = gsap.timeline({ repeat: 0 });
var mySplitText = new SplitText(".name", { type: "words,chars" });
var chars = mySplitText.chars; //an array of all the divs that wrap each character

tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.1
});
tl.restart();

