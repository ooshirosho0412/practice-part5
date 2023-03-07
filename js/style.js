const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-sab');

hamburger.addEventListener('click', () => {
    toggleClasses();
});


function toggleClasses() {
  hamburger.classList.toggle('opeen');
    menu.classList.toggle('opeen');
    $("body").toggleClass("active");
}

setTimeout(toggleClasses, 500);
setTimeout(toggleClasses, 3000);
$('#menu-sab a[href]').on('click', function(event) {
  $('.hamburger').trigger('click');
});
const swiper = new Swiper('.swiper', {
  
    direction: 'horizontal',
    loop: true,
    speed:1000,
    
   
    pagination: {
      el: '.swiper-pagination',
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
$('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1.5,
      }
    }
  ]
  
  });
  const targetElement = document.querySelectorAll(".phto ");
  document.addEventListener("scroll", function(){
    for (let index = 0; index < targetElement.length; index++){
      const getElementDistance = targetElement[index].
      getBoundingClientRect().top + targetElement[index].clientHeight * 
      .6
      if(window.innerHeight >  getElementDistance){
        targetElement[index].classList.add("show")
      }
    }
  })
  const targetElemen = document.querySelectorAll(".top-name, .about-coment");
  document.addEventListener("scroll", function(){
    for (let index = 0; index < targetElemen.length; index++){
      const getElementDistance = targetElemen[index].
      getBoundingClientRect().top + targetElemen[index].clientHeight * 
      .6
      if(window.innerHeight >  getElementDistance){
        targetElemen[index].classList.add("show")
      }
    }
  })
  const targetEleme = document.querySelectorAll(".intro-coment ,.img-left, .company-profile, .contact-table");
  document.addEventListener("scroll", function(){
    for (let index = 0; index < targetEleme.length; index++){
      const getElementDistance = targetEleme[index].
      getBoundingClientRect().top + targetEleme[index].clientHeight * 
      .6
      if(window.innerHeight >  getElementDistance){
        targetEleme[index].classList.add("show")
      }
    }
  })
  