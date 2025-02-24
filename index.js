const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.pointerEvents = "none";

document.body.append(canvas);

const selectors = ["img", ".red", ".green", ".purple", ".yellow", ".blue"];

function draw() {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "blue";

  for (const element of document.querySelectorAll(selectors)) {
    const rect = element.getBoundingClientRect();

    const x = rect.left + window.scrollX + 0.5;
    const y = rect.top + window.scrollY + 0.5;
    const width = rect.width;
    const height = rect.height;

    ctx.strokeRect(x, y, width, height);

    const size = `${Math.round(width)} x ${Math.round(height)}`;
    ctx.fillStyle = "grey";
    ctx.font = "12px monospace";
    ctx.fillText(size, x + width - size.length * 7, y + 12);

    let name = element.tagName.toLowerCase();
    if (element.id) {
      name += `#${element.id}`;
    }
    if (element.classList.length > 0) {
      name += `.${[...element.classList].join(".")}`;
    }
    ctx.fillStyle = "#341539";
    ctx.fillText(name, x + 5, y + height - 5);
  }
}

window.addEventListener("resize", draw);
draw();

document.querySelector("div.red").addEventListener("click", (event) => {
  event.stopPropagation();
  alert("div.red");
});
