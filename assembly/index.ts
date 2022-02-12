export function render(width: usize, height: usize): void {
  for (let y: usize = 0; y < height; y++) {
    for (let x: usize = 0; x < width; x++) {
      const j = height - 1 - y;
      const indexOffset: usize = (j * width + x) * 4;

      const r: f64 = f64(x) / (width - 1);
      const g: f64 = f64(y) / (height - 1);
      const b: f64 = 0.25;

      store<u8>(indexOffset, u8(r * 255.999));
      store<u8>(indexOffset + 1, u8(g * 255.999));
      store<u8>(indexOffset + 2, u8(b * 255.999));
      store<u8>(indexOffset + 3, 255);
    }
  }
}
