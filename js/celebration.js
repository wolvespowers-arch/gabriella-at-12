const NS = "http://www.w3.org/2000/svg";

function make(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}

// Twelve candles, one for every year
const candles = document.getElementById("candles");
for (let i = 0; i < 12; i++) {
  const x = 80 + i * 7.6;
  candles.appendChild(make("rect", { x: x, y: 42, width: 3, height: 18, class: "candle" }));
  candles.appendChild(make("ellipse", { cx: x + 1.5, cy: 36, rx: 2.6, ry: 4.5, class: "flame" }));
}

function confetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#D9B46C", "#E9B9DE", "#B9A4EF", "#F6E8FF", "#75449B"];
  for (let i = 0; i < 90; i++) {
    const p = document.createElement("i");
    p.className = "bit";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = (3 + Math.random() * 3) + "s";
    p.style.animationDelay = (Math.random() * 1.2) + "s";
    document.body.appendChild(p);
    setTimeout(function () { p.remove(); }, 8500);
  }
}

document.getElementById("wishBtn").addEventListener("click", function () {
  document.getElementById("cake").classList.add("out");
  this.hidden = true;
  document.getElementById("after").hidden = false;
  confetti();
});
