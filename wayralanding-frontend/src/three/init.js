import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import modelUrl from "./low_poly_airplane.glb";

export function initThree(container) {
  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x121212);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 100;
  camera.position.y = 30;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Geometry
//   const geometry = new THREE.BoxGeometry();
//   const material = new THREE.MeshNormalMaterial();
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

// Light (GLB models NEED light)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// Load model
const loader = new GLTFLoader();
let model = null;
loader.load(
  modelUrl,
  (gltf) => {
    model = gltf.scene;
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error("Error loading GLB:", error);
  }
);


  // Render loop
  function animate() {
    if (model) {
        model.rotation.y += 0.01;
      }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}