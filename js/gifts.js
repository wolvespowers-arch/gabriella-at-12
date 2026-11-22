// Edit these messages anytime. Gifts 3 and 10 are memories: swap in real ones!
const GIFTS = [
  { kind: "A loving message", text: "You are loved more than you know, Gabriella. Never forget that." },
  { kind: "A special compliment", text: "You have a kind heart, and people feel it the moment you walk in." },
  { kind: "A family memory", text: "Some of my best memories are simply the ordinary days we spent together at home." },
  { kind: "A royal decree", text: "By order of the kingdom: today you may say “because I’m the birthday princess” and win any argument." },
  { kind: "Encouragement", text: "When something feels hard, remember: you are braver and smarter than you think." },
  { kind: "A birthday wish", text: "I wish you a year full of laughter, good friends and big, shiny dreams." },
  { kind: "A special compliment", text: "You are growing into someone amazing, and I’m proud to be your brother." },
  { kind: "A funny surprise", text: "Fun fact: you are now 12, which means you are officially a professional at being 11. Congratulations!" },
  { kind: "Encouragement", text: "Dream big. Whatever you want to become, start small and keep going. I believe in you." },
  { kind: "A family memory", text: "Remember when we laughed so much we could hardly breathe? I hope we have a thousand more moments like that." },
  { kind: "A loving message", text: "Being your brother is one of the best things in my life. Thank you for being you." },
  { kind: "A birthday wish", text: "Happy 12th birthday, Gabriella! May this be your best year yet." }
];

const KEY = "gabriella-at-12-opened";
let opened = [];
try { opened = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { opened = []; }

const grid = document.getElementById("grid");
const dlg = document.getElementById("dlg");

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(opened)); } catch (e) {}
}

function refresh() {
  document.getElementById("opened").textContent = opened.length;
  if (opened.length === GIFTS.length) {
    document.getElementById("intro").textContent =
      "You opened every gift! One last surprise is waiting.";
    document.getElementById("letterLink").hidden = false;
  }
}

GIFTS.forEach(function (g, i) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "gift" + (opened.includes(i) ? " open" : "");
  b.setAttribute("aria-label", "Gift " + (i + 1));
  b.innerHTML = "<span>" + (i + 1) + "</span>";
  b.addEventListener("click", function () {
    document.getElementById("dKind").textContent = g.kind;
    document.getElementById("dNum").textContent = "Gift " + (i + 1) + " of 12";
    document.getElementById("dMsg").textContent = g.text;
    if (!opened.includes(i)) { opened.push(i); save(); }
    b.classList.add("open");
    refresh();
    dlg.showModal();
  });
  grid.appendChild(b);
});

document.getElementById("dClose").addEventListener("click", function () { dlg.close(); });
dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
refresh();
