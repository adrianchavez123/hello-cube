import * as THREE from "three";
import "./styles.css";
// Scene Mesh Camera renderer

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector(".draw");
const rendered = new THREE.WebGLRenderer({ canvas });
rendered.setSize(aspect.width, aspect.height);

// clock
const clock = new THREE.Clock();
const animate = () => {
  //   mesh.rotation.x += 0.01;
  //   mesh.rotation.y += 0.01;
  //   mesh.rotation.z += 0.01;
  const elapsedTime = clock.getElapsedTime();
  //   mesh.rotation.x = elapsedTime;
  mesh.rotation.y = elapsedTime * Math.PI * 2;

  rendered.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();

// function will get called 60 time per second on some devices
// function will get called 120 time per second on some devices
// fps stands for frame per second
