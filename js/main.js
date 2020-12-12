//Slider
let slides = document.querySelector('.slider-items').children;
let nextSlide = document.querySelector(".right-slide");
let prevSlide = document.querySelector(".left-slide");
let totalSlides = slides.length;
let index = 0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

//Smooth Scrool
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    let target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, function () {
	        window.location.hash = target;
	    });
	});
});


//add smooth scrolling when clicking any anchor link
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//      anchor.addEventListener('click', function (e) {
//          e.preventDefault();
//          document.querySelector(this.getAttribute('href')).scrollIntoView({
//              behavior: 'smooth'
//          });
//      });
//  });

//  window.scrollTo({ top: 900, behavior: 'smooth' })








