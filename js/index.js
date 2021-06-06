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

const mandrill = require('node-mandrill')('<your API Key>'); 

function sendEmail ( _name, _email, _subject, _message) {
    mandrill('/messages/send', {
        message: {
            to: [{email: _email , name: _name}],
            from_email: document.getElementById("cemail").value,
            subject: _subject,
            text: _message
        }
    }, function(error, response){
        if (error) console.log( error );
        else console.log(response);
    });
}

// define your own email api which points to your server.

app.post( '/api/sendemail/', function(req, res){
            
    let _name = req.body.name;
    let _email = req.body.email;
    let _subject = req.body.subject;
    let _messsage = req.body.message;

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _subject, _message );

});
