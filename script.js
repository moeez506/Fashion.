let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if (window.scrollY > 100) {
         document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}

let themetoggler = document.querySelector('#theme-toggler');

themetoggler.onclick = () =>{
    themetoggler.classList.toggle('fa-sun');
    if(themetoggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

// ------Featured Products-------

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
})

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
})

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
})

// ----------------------------------

// ------deal section timer----

var countDownDate = new Date("Oct 15, 2021 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// -------------------------------

// -------products slider-------

var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
          delay: 4000,
          disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

// ---------------------------------
var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});
// --------review section slider------

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
