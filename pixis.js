setTimeout(function(){let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

 PIXI.utils.sayHello();
	

	
	var renderer = PIXI.autoDetectRenderer(250,250,{
	transparent:true,
	resolution:1
	});
	
	document.getElementById('display').appendChild(renderer.view);
	
	var stage = new PIXI.Container();
	
	
	PIXI.loader
	.add("spritesheet","Assets/Images/Tiger5Row-01.png")
	.load(setup);

	var sprite;
	
	function setup(){
	stage.interactive = true;
	
	var rect = new PIXI.Rectangle(0,0,260,336);
	var texture =PIXI.loader.resources["spritesheet"].texture;

	texture.frame = rect;

var texture;
	
	sprite = new PIXI.Sprite(texture);
	
	var count = 0;
	console.log("i got in 2.");
	var idle = setInterval(function(){
		
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
	
		
		
	},120);
		
		
		sprite.scale.set(1, 1);
		stage.addChild(sprite);
		
		animationLoop();
		
		
	}
	
	function animationLoop(){
		requestAnimationFrame(animationLoop);
		
		
		renderer.render(stage);
	}
},1000);