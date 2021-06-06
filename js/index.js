$(window).scroll(function () {
  if ($(this).scrollTop() >= 650) {
    $("#navbar").addClass("noTransparrent");
  } else {
    $("#navbar").removeClass("noTransparrent");
  } 
});
     $(window).one('scroll', () => {
        $('.circle')
          .circleProgress({
            startAngle: -Math.PI / 2,
            fill: '#bd40b0'
          })
          .on('circle-animation-progress', function (event, progress, stepValue) {
            $(this)
              .find('span')
              .html(Math.round(stepValue * 100) + '%');
          });
      });
$(function () {
   $("#commentForm").validate();
});
$(document).ready(function(){
  $(".nav-item").click(function(){
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
  });
});
