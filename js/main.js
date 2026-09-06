// Kokam — random background color on every load

const KOKAM_PALETTE = [
  "#2451B7", // blue
  "#C1440E", // burnt orange
  "#7B2FF7", // purple
  "#0F7B6C", // teal green
  "#D6249F", // magenta
  "#E63946", // red
  "#1B4332", // dark green
  "#3A0CA3", // indigo
  "#B5179E", // pink
  "#023E8A", // navy
];

(function setRandomBackground() {
  const color = KOKAM_PALETTE[Math.floor(Math.random() * KOKAM_PALETTE.length)];
  document.body.style.backgroundColor = color;
})();
