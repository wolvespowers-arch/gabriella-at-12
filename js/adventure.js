// The \uFE0E makes each symbol draw as plain text, not as a colorful emoji
const SYMBOLS = ["♛\uFE0E", "♥\uFE0E", "★\uFE0E", "✿\uFE0E", "☾\uFE0E", "♪\uFE0E"];

const board = document.getElementById("board");
const winBox = document.getElementById("win");
let first = null, lock = false, moves = 0, matched = 0;

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = list[i]; list[i] = list[j]; list[j] = t;
  }
  return list;
}

function start() {
  board.innerHTML = "";
  winBox.hidden = true;
  first = null; lock = false; moves = 0; matched = 0;
  document.getElementById("moves").textContent = 0;

  shuffle(SYMBOLS.concat(SYMBOLS)).forEach(function (sym) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "card";
    b.dataset.sym = sym;
    b.textContent = sym;
    b.setAttribute("aria-label", "Hidden card");
    b.addEventListener("click", function () { flip(b); });
    board.appendChild(b);
  });
}

function flip(card) {
  if (lock || card.classList.contains("on") || card.classList.contains("ok")) return;
  card.classList.add("on");
  card.setAttribute("aria-label", "Card " + card.dataset.sym);

  if (!first) { first = card; return; }

  moves++;
  document.getElementById("moves").textContent = moves;

  if (first.dataset.sym === card.dataset.sym) {
    first.classList.add("ok");
    card.classList.add("ok");
    first = null;
    matched++;
    if (matched === SYMBOLS.length) winBox.hidden = false;
  } else {
    lock = true;
    const a = first;
    first = null;
    setTimeout(function () {
      a.classList.remove("on");
      card.classList.remove("on");
      lock = false;
    }, 800);
  }
}

document.getElementById("again").addEventListener("click", start);
start();
