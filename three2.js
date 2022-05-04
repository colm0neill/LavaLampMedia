
window.addEventListener("load", function() {
    
    // Create canvas element. The canvas is not added to the
    // document itself, so it is never displayed in the
    // browser window.
    var canvas = document.createElement("canvas");
    // Get WebGLRenderingContext from canvas element.
    var gl = canvas.getContext("webgl")
      || canvas.getContext("experimental-webgl");
    // Report the result.
    if ((gl && gl instanceof WebGLRenderingContext) ){
      console.log("Congratulations! Your browser supports WebGL & you didn't have to lift a finger.");
      displaythreed();
    } else {
     
      var tdWrap = document.getElementById("wrapthree");
      
      var pr = document.createElement("div");
      pr.innerHTML = '<h2>Sorry no 3D things for you...</h2>';
      tdWrap.appendChild(pr);

      console.error("Failed to get WebGL context.");
      alert("Your browser or device may not support WebGL.");
    }

});

function displaythreed(){
    console.log("starting");


"use strict";

// simplified on three.js/examples/webgl_loader_gltf2.html                        
function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas, alpha: true });
  
    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);
  
    const controls = new THREE.OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();
    
    renderer.setClearColor( 0x666666, 0 );
    const scene = new THREE.Scene();

    // load gltf model and texture                            
    const objs = [];
    const loader = new THREE.GLTFLoader();
    loader.load("Assets/Images/models/scene.gltf", gltf => {
        // model is a THREE.Group (THREE.Object3D)                              
        const mixer = new THREE.AnimationMixer(gltf.scene);
        // animations is a list of THREE.AnimationClip
        for (const anim of gltf.animations) {
            mixer.clipAction(anim).play();
        }
        // settings in `sceneList` "Monster"
        gltf.scene.scale.set(0.4, 0.4, 0.4);
        gltf.scene.rotation.copy(new THREE.Euler(0, -3 * Math.PI / 4, 0));
        gltf.scene.position.set(2, 1, 0);
        
        scene.add(gltf.scene);
        objs.push({gltf, mixer});
    });

    // animation rendering                                                      
    const clock = new THREE.Clock();
    (function animate() {
        // animation with THREE.AnimationMixer.update(timedelta)                
        objs.forEach(({mixer}) => {mixer.update(clock.getDelta());});
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    })();
    return objs;
}
    const objs = main();
}
