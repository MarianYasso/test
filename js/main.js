$(function(){
  // плавний перехід по кліку
 $(".go").click(function (){
 	elementClick = $(this).attr("href");
 	destination = $(elementClick).offset().top;
 	$("body,html").animate({scrollTop:destination},800);
  });
   // Анімація
 $(window).scroll(function() {
    	$('.offer,.edu-title,.edu-link,.edu-text').each(function(){
        	var imagePos = $(this).offset().top;
 
        	var topOfWindow = $(window).scrollTop();
        	if (imagePos < topOfWindow+650) {
            	$(this).addClass("fadeInLeft");
       	 }
    	});
        });
         // Слайдер
        $('.sl').slick({
            dots: true,
            infinite: true,
            speed: 300,
            
            slidesToShow:2,
            slidesToScroll: 1,
            responsive: [
            {
             breakpoint: 550,
             settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
              dots: true
            }
          },
        ]
    });
});
