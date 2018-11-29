setTimeout(function(){let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

 PIXI.utils.sayHello(type);
	

	
	var renderer = PIXI.autoDetectRenderer(260,336,{
	transparent:true,
	resolution:1,
	forceCanvas:true
	});
	
	document.getElementById('display').appendChild(renderer.view);
	
	var stage = new PIXI.Container();
	
	
	PIXI.loader
	.add("Assets/Images/Tiger5Row-01.png")
	.load(setup);
	

	var tiger;
	

	function setup(){
		tiger = new PIXI.Sprite(
		PIXI.loader.resources["Assets/Images/Tiger5Row-01.png"].texture
		);
	stage.addChild(tiger);
	animationLoop();
	
	
	var count = 0;
	//console.log("i got in 2.");
	var idle = setInterval(function(){
		console.log("foo");
		
		
		
		
		/*
		if (rect.x >= 260 * 20) rect.x = 0;
		rect.x+=260;
		//console.log("Stage 1. x="+ rect.x+" y= "+rect.y+" Count=: "+count);
		if (rect.x == 260*20){
			
			count++;
			//console.log("Stage 2. x="+ rect.x+" y= "+rect.y+" Count=: "+count);
			if (count < 5){
				rect.y+=336;
		//console.log("Stage 3. x="+ rect.x+" y= "+rect.y+" Count=: "+count);				
			}
			else{
				count = 0;
				rect.y = 0;
				//console.log("Stage 4. x="+ rect.x+" y= "+rect.y+" Count=: "+count);
				}
		    
		 }
			
			
		sprite.texture.frame = rect;
	
		*/
		
	},4000);
		
		
		sprite.scale.set(1, 1);
		stage.addChild(sprite);
		
		animationLoop();
		
		
	}
	
	function animationLoop(){
		requestAnimationFrame(animationLoop);
		
		
		renderer.render(stage);
	}
},1000);
		