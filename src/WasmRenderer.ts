import { instantiate } from "@assemblyscript/loader";
import type { render } from "../build/untouched";
export class WasmRenderer {
  readonly width: number;
  readonly height: number;
  readonly buffer: Uint8ClampedArray;
  private readonly rendererUrl = import.meta.env.DEV
    ? "../build/untouched.wasm"
    : "/optimized.wasm";
  private readonly memory: WebAssembly.Memory;
  private _render: typeof render | undefined;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    const byteSize = width * height << 2;
    const nPages = ((byteSize + 0xffff) & ~0xffff) >>> 16;
    this.memory = new WebAssembly.Memory({ initial: nPages });
    this.buffer = new Uint8ClampedArray(this.memory.buffer);
  }
  async init() {
    const { exports } = await instantiate(
      fetch(this.rendererUrl),
      {
        env: {
          memory: this.memory,
        },
      },
    );
    this._render = exports.render;
  }
  render() {
    if (this._render == null) {
      throw new Error("Call a `init()` first.");
    }
    this._render(this.width, this.height);
  }
}
