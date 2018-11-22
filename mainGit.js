/* Smooth Scrolling

*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
/*---------------End Of Scroll Smoothing------------------*/

/*---------------Game Launching Listener------------------*/
var theGame= "";
var timesLoaded = 0;
document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  
  if(theGame.length !==4){
  if(keyName =="w"){
	theGame+=keyName;
	}
	 if(keyName =="a"){
	theGame+=keyName;
  }
   if(keyName =="s"){
	theGame+=keyName;
  }
   if(keyName =="d"){
	theGame+=keyName;
  }
  if(theGame == "wasd"){
  console.log("The game is a foot, ready on "+theGame);
  theGame="";
  }
  
  console.log("the chars "+theGame);
}
else{
	theGame="";
}
});

/*---------------End of Launching Listener------------------*/


$(document).ready(function () {
    if((window.location.href.indexOf("index") > -1)&&(timesLoaded == 0)) {
      

 
			setTimeout(function(){
				$('body').addClass('loaded');
				$('.glitch').css('opacity','0.1');
			}, 3000);
	
		timesLoaded++;
		
		console.log("The homepage has been loaded " + timesLoaded +" times.");
	}
else{
 
			setTimeout(function(){
				$('body').addClass('loaded');
				$('.glitch').css('opacity','0.1');
			}, 1000);

}
});

document.addEventListener('DOMContentLoaded', init, false);
function init(){
document.getElementById("myBtns").addEventListener("click", myFunction,);

window.addEventListener("resize", rmvGrey);
window.addEventListener("resize", changeSvg);

$(document).ready(function(){
    $('.animated-icon1').click(function(){
        $(this).toggleClass('open');
    });
});

//implementation of particles js. #functionallity currently off - 19/09/18
var scene = document.getElementById('scene');
  var input = document.getElementById('scene-input');
 if (scene !== null){ 
  var parallax = new Parallax(scene, {
    hoverOnly: true,
	 scalarX: 15,
	 scalarY: 15,	 
	 clipRelativeInput: true,
    relativeInput: true,
	friction: .1,
  });
 }
window.onload = function() {
  Particles.init({
  selector: ['.background','.background1'],
	maxParticles: 200,
	speed: .9,
	sizeVariations: 7,
	minDistance: 190,
	color: ['#cc0670', '#aaaaaa', '#55bdd4'],
    connectParticles: true,
	
	
	 responsive: [
    {
      breakpoint: 992,
      options: {
        maxParticles: 100,
        connectParticles: false
     }
    }
  ]
});
}
//this function allows the nav-bar to know whether it has collapsed using the bootstrap function and adjusts.
function myFunction() {
	 var x = document.getElementById("myBtns").getAttribute("aria-expanded"); 
  if (x == "false") 
  {
	  document.getElementById("collapsibleNavbar").style.background = "rgba(111,111,111,0.8)";
	  document.getElementById("collapsibleNavbar").style.visibility = "visible";

  } else {
	document.getElementById("collapsibleNavbar").style.background = "rgba(111,111,111,0.0)";
	document.getElementById("collapsibleNavbar").style.visibility = "hidden";
  }
	
	}

}
//Function removes the grey box on collapse reveals it when the screen resizes.
function rmvGrey(){
	console.log("got into resize");
	var winWidth = window.innerWidth;
	if (winWidth > 991){
		
		document.getElementById("collapsibleNavbar").style.transition = "none";
		document.getElementById("collapsibleNavbar").style.background = "rgba(111,111,111,0.0)";
		document.getElementById("collapsibleNavbar").style.visibility = "visible";
	}
	else{
		document.getElementById("collapsibleNavbar").style.background = "rgba(111,111,111,0.8)";
	}
	
	
}

function changeSvg (){
	var winWidth = window.innerWidth;
	var xWidth = document.getElementById("svgLinez").firstChild;
	
	// Set the colour to something else
	xWidth.setAttribute("x1", winWidth);
	
	console.log("foo ");
}


var allClick = ["letters1","letters2","letters3"];
	 var letters = "";
 function function5(id){

 
	 letters = id;

	 console.log(letters);
	 	 if(letters !== "loadAnmi"){
 new Vivus(letters, {duration: 200}, function() {
      $('#tletter').attr('style', 'fill:black')
      $('#hletter').attr('style', 'fill:black')
    });
}

	if(letters == "loadAnmi"){

	for(i = 0; i < allClick.length;i++){

		new Vivus(allClick[i], {duration: 250}, function() {
		$('#tletter').attr('style', 'fill:black')
		$('#hletter').attr('style', 'fill:black')
		});
		letters="";
	}
	}
	
	}
	

	
	
/*function myFunction(){

	if (mop !== 1){
	var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Lava Lamp Media.'
    ];
    
    setTimeout(m.animateIn, 1000);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*15))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = true;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}
	
console.clear();

	var messenger = new Messenger($('#messenger')); 
	}
}*/