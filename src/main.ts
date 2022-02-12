import { height, width } from "./config";
import { Renderer } from "./Renderer";

const $canvas = document.getElementById("canvas") as HTMLCanvasElement;

(async () => {
  const renderer = new Renderer($canvas, { width, height });
  await renderer.init();

  renderer.render();
})();
