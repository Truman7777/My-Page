const colors = [
  "#ef5777",
  "#9aa0ff",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#0fbcf9",
  "#00d8d6",
  "#08d274",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#ffa801",
  "#ffd32a",
];;

document.body.style.backgroundImage = `linear-gradient(to left, ${
  colors[Math.floor(Math.random() * colors.length)]
}, ${colors[Math.floor(Math.random() * colors.length)]})`;
