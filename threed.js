
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

    


// Three.js - Load .OBJ and .MTL file - Windmill2
// from https://r105.threejsfundamentals.org/threejs/threejs-load-obj-materials-windmill2.html


'use strict';

/* global THREE */

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
  //scene.background = new THREE.setClearColor(0x000000, .5);

  {
    const planeSize = 3100;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 200;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0x000000;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }
{
  const gtlfLoader = new THREE.GLTFLoader();
  gtlfLoader.load("Assets/Images/models/scene.gltf",
  function (gltf) {
    // gltf.scene.traverse(function (child) {
    //     if ((child as THREE.Mesh).isMesh) {
    //         const m = (child as THREE.Mesh)
    //         m.receiveShadow = true
    //         m.castShadow = true
    //     }
    //     if (((child as THREE.Light)).isLight) {
    //         const l = (child as THREE.Light)
    //         l.castShadow = true
    //         l.shadow.bias = -.003
    //         l.shadow.mapSize.width = 2048
    //         l.shadow.mapSize.height = 2048
    //     }
    // })
  })
    scene.add(gltf.scene);
 
}
  {
    // const objLoader = new THREE.OBJLoader2();
    // objLoader.loadMtl('https://r105.threejsfundamentals.org/threejs/resources/models/windmill_2/windmill-fixed.mtl', null, (materials) => {
    //   objLoader.setMaterials(materials);
    //   objLoader.load('https://r105.threejsfundamentals.org/threejs/resources/models/windmill_2/windmill.obj', (event) => {
    //     const root = event.detail.loaderRootNode;
    //     scene.add(root);

    //     // compute the box that contains all the stuff
    //     // from root and below
    //     const box = new THREE.Box3().setFromObject(root);

    //     const boxSize = box.getSize(new THREE.Vector3()).length();
    //     const boxCenter = box.getCenter(new THREE.Vector3());

    //     // set the camera to frame the box
    //     frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

    //     // update the Trackball controls to handle the new size
    //     controls.maxDistance = boxSize * 10;
    //     controls.target.copy(boxCenter);
    //     controls.update();
    //   });
    // });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();


  };
