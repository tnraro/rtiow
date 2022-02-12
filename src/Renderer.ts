import { WasmRenderer } from "./WasmRenderer";

export interface RendererOptions {
  width: number;
  height: number;
}
export class Renderer {
  readonly width: number;
  readonly height: number;
  private readonly context: CanvasRenderingContext2D;
  private readonly wasmRenderer: WasmRenderer;
  constructor(canvas: HTMLCanvasElement, options: RendererOptions) {
    canvas.width = options.width;
    canvas.height = options.height;
    this.width = options.width;
    this.height = options.height;
    const context = canvas.getContext("2d");
    if (context == null) {
      throw new Error("context is null");
    }
    this.context = context;
    this.wasmRenderer = new WasmRenderer(options.width, options.height);
  }
  async init() {
    await this.wasmRenderer.init();
  }
  render() {
    console.time("Rendering takes");
    const imageData = this.context.getImageData(
      0,
      0,
      this.wasmRenderer.width,
      this.wasmRenderer.height,
    );
    this.wasmRenderer.render();
    for (let i = 0; i < this.wasmRenderer.buffer.length; i++) {
      imageData.data[i] = this.wasmRenderer.buffer[i];
    }
    this.context.putImageData(imageData, 0, 0);
    console.timeEnd("Rendering takes");
    console.info("Done.");
  }
}
