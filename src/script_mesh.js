import * as THREE from "three";
import "./styles.css";
// console.log(THREE);

// 1) Scene
// 2) Objects
// 3) Camera
// 4) Renderer

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
const material = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 1;
// mesh.position.y = 3;
mesh.position.z = -4;
// mesh.scale.x = 1;
// // mesh.scale.y = 2;
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 1.2; // 1/8 turn
// scene.add(mesh);

//Mesh two
const geometryTwo = new THREE.BoxGeometry(1, 1, 1);
// const geometryTwo = new THREE.BoxBufferGeometry(1, 1, 1);
const materialTwo = new THREE.MeshBasicMaterial({ color: "green" });
const meshTwo = new THREE.Mesh(geometryTwo, materialTwo);
meshTwo.position.y = 2;
meshTwo.position.z = -5;
// scene.add(meshTwo);

// mesh geometry types
// THREE.BoxGeometry
// THREE.CapsuleGeometry
// THREE.CircleGeometry
// THREE.ConeGeometry
// THREE.CylinderGeometry
// THREE.PlaneGeometry
// THREE.SphereGeometry
// THREE.TorusGeometry

const geometrythree = new THREE.BufferGeometry();
const verticesArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

const positionAttribute = new THREE.BufferAttribute(verticesArray, 3);
geometrythree.setAttribute("position", positionAttribute);
console.log(geometrythree);
const meshThree = new THREE.Mesh(geometrythree, materialTwo);
meshThree.position.x = 1;
meshThree.position.y = 1;
meshThree.position.z = 1;

group.add(mesh, meshTwo, meshThree);
group.position.x = 1;
scene.add(group);
//AxesHelper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

//camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  75, //field of view
  aspect.width / aspect.height, //aspect ration
  1, //near, default = 1
  2000 //far, default = 2000
);
camera.position.z = 4;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera);

//renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
