// Birthday: 27 November 2026, midnight (device time)
const BIRTHDAY = new Date(2026, 10, 27, 0, 0, 0);

function plural(n, word) {
  return n + " " + word + (n === 1 ? "" : "s");
}

function tick() {
  const el = document.getElementById("when");
  const diff = BIRTHDAY - new Date();
  if (diff <= 0) {
    el.textContent = "Today is your day, Gabriella.";
    return;
  }
  const mins = Math.floor(diff / 60000);
  const d = Math.floor(mins / 1440);
  const h = Math.floor((mins % 1440) / 60);
  const m = mins % 60;
  el.textContent =
    plural(d, "day") + ", " + plural(h, "hour") + " and " +
    plural(m, "minute") + " until your birthday";
}
tick();
setInterval(tick, 30000);

document.getElementById("enterBtn").addEventListener("click", function () {
  window.location.href = "pages/gifts.html";
});
