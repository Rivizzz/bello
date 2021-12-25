$(document).ready(function () {
   setTimeout(function () {
      window.scrollTo(0, 0);
   }, 1);
   
   $('.header__burger').click(function () {
      $('.header__burger, .header__nav').toggleClass("active");
      $('body').toggleClass("lock");
      $('.header__login').toggleClass("active");
      var blocks_plan = document.$(".blocks-plan");
      $(window).resize(function () {
         if ($(window).width() <= 1100) {
            blocks_plan.style.background = "black !important";
         }
         else {
           
         }
      });
      $(window).resize(function () {
         if ($(window).width() <= 900) {
            $('.header__login').hide();
            $('.header__login.active').show(100);
         }
         else {
            $('.header__login').show();
         }
      });

   });

   let mask = document.querySelector('.mask');

   window.addEventListener('load', () => {
      mask.classList.add('hide');
      setTimeout(() => {
         mask.remove();
      }, 500);
   });


   const animItems = document.querySelectorAll('._anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart
            
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
            } else {
               if (animItem.classList.contains('_anim-no-hide')) {
                  animItem.classList.add('_active');
               }
            }
         
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }

      setTimeout(() => {
         animOnScroll();
      }, 300);

      

   }
});