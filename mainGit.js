/*
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('.glitch').css('opacity','0.1');
    }, 3000);
 
});*/

document.addEventListener('DOMContentLoaded', init, false);
function init(){
document.getElementById("myBtns").addEventListener("click", myFunction,);

window.addEventListener("resize", rmvGrey);

$(document).ready(function(){
    $('.animated-icon1').click(function(){
        $(this).toggleClass('open');
    });
});

var scene = document.getElementById('scene');
  var input = document.getElementById('scene-input');
  // Pretty simple huh?
  var parallax = new Parallax(scene, {
    hoverOnly: true,
    relativeInput: false,
	friction: .1,
  });

window.onload = function() {
  Particles.init({
    selector: '.background',
	maxParticles: 130,
	speed: .5,
	sizeVariations: 5,
	minDistance: 120,
	color: ['#cc0670', '#aaaaaa', '#55bdd4'],
    connectParticles: true,
	
	
	 responsive: [
    {
      breakpoint: 992,
      options: {
        maxParticles: 80,
        connectParticles: false
     }
    }
  ]
});
}

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