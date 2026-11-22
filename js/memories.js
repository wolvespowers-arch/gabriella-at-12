// Put your photos in the assets/images folder with these exact names.
// Change the captions to anything you like. Add or remove lines freely.
const PHOTOS = [
  { file: "photo1.jpg", caption: "Our family" },
  { file: "photo2.jpg", caption: "You, shining" },
  { file: "photo3.jpg", caption: "Together" },
  { file: "photo4.jpg", caption: "A day to remember" },
  { file: "photo5.jpg", caption: "Always smiling" },
  { file: "photo6.jpg", caption: "Moments like this" }
];

const gallery = document.getElementById("gallery");
const empty = document.getElementById("empty");

function checkEmpty() {
  empty.hidden = gallery.children.length > 0;
}

PHOTOS.forEach(function (p) {
  const fig = document.createElement("figure");
  fig.className = "frame";

  const img = document.createElement("img");
  img.src = "../assets/images/" + p.file;
  img.alt = p.caption;
  img.loading = "lazy";
  // If a photo is missing, remove its frame instead of showing a broken picture
  img.addEventListener("error", function () { fig.remove(); checkEmpty(); });

  const cap = document.createElement("figcaption");
  cap.textContent = p.caption;

  fig.appendChild(img);
  fig.appendChild(cap);
  gallery.appendChild(fig);
});
checkEmpty();
