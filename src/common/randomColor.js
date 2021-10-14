export default function randomColor() {
  const r = Math.floor(Math.random() * (255 - 1 + 1) + 1);
  const g = Math.floor(Math.random() * (255 - 1 + 1) + 1);
  const b = Math.floor(Math.random() * (255 - 1 + 1) + 1);

  return `rgb(${r}, ${g}, ${b})`;
}
