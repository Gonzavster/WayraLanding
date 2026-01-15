import { initThree } from "./three/init.js";

console.log("main.js loaded");

const root = document.getElementById("three-root");

if (root) {
  initThree(root);
}
console.log("The good main is being loaded");
