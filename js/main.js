$(document).ready(function(){
  
  
  //------------------------------------//
  //Navbar//
  
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  
  
  //------------------------------------//
  //Scroll To Function For Start//
  //------------------------------------//
  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  $('.alert-dismissable').click(function(event){
    // $('#appointmentForm .form-control').val('');
    $(this).hide();
  });
  //------------------------------------//
  //Wow!! OMG OMG OMG its an animation poggers//
  //------------------------------------// 
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (just sticking with the default wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation 
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();
     
	
    

});

 var appointmentID = 1;
      var packages = {
        "Personal": "$5/month",
        "Professional": "$12/month",
        "Business": "$24/month"
      }
  //define appointment Object
  function Appointment(data){
    data = data || {};
    this.id = data.id || appointmentID++;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    // this.address = data.address || '';
    // this.city = data.city || '';
    // this.province = data.province || '';
    // this.postalCode = data.postalCode || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    // this.package = data.package || 'Personal';
    this.date = data.date || formatDate();
  }
  var Appointments = function(){
    this.data = [];
  }
  Appointments.prototype.setAppointment = function(data){
     this.data.push(data)
  }
  var appointment = new Appointments();
  var newAppointment;

  function formatDate(date) {
    var d = (date ? new Date(date)  : new Date());
     var   month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

   var str = [year, month, day].join('-');
    var cHour = ("0" + d.getHours()).slice(-2);
    var cMin = ("0" + d.getMinutes()).slice(-2);
    var cSec = ("0" + d.getSeconds()).slice(-2);
    return str+'T'+cHour+ ":" + cMin;
  }
  $('.datetimepicker').datetimepicker();
  $('body').on('submit','#appointmentForm', function(event){
      event.preventDefault();
      event.stopPropagation();
      newAppointment = new Appointment();
       newAppointment.firstName = $('#firstName').val();
      newAppointment.lastName = $('#lastName').val();
    // newAppointment.address = $('#address').val();
    // newAppointment.city = $('#city').val();
    // newAppointment.province = $('#province').val();
    // newAppointment.postalCode = $('#postalCode').val();
    newAppointment.email = $('#email').val();
    newAppointment.phone = $('#phone').val();
    // newAppointment.package = $('#package').val();
    newAppointment.date = $('#datetime').val();
    appointment.setAppointment(newAppointment);
    
    calendar.addEvent({
          title: newAppointment.firstName+' '+newAppointment.lastName+'\n'+newAppointment.email+'\n'+newAppointment.phone,
          start: formatDate(newAppointment.date)
        });
   $('.alert').show();
  });
