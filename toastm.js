var head = document.getElementsByTagName("head")[0];

var link = document.createElement("link");

link.rel = "stylesheet";

link.type = "text/css";

link.href = "./node_modules/style.css";

head.appendChild(link);
let toastm = document.createElement("div");
let body = document.body;
toastm.className = "toastm";
function addPosition(position) {
  if (position == "left") {
    toastm.style.left = "0";
  } else if (position == "right") {
    toastm.style.right = "0";
  } else if (position == "center") {
    toastm.style.top = "0";
    toastm.style.right = "0";
    toastm.style.left = "0";
  } else {
    // default
    toastm.style.top = "0";
    toastm.style.right = "0";
    toastm.style.left = "0";
  }
}
export function addToastm(options) {
  addPosition(options.position);
  let color = options.color;
  toastm.textContent = options.text;
  if (color == "primary") {
    toastm.className = "toastm " + color;
    console.log(toastm.className);
  } else if (color == "secondary") {
    toastm.className = "toastm " + color;
  } else if (color == "dark") {
    toastm.className = "toastm " + color;
  } else if (color == "danger") {
    toastm.className = "toastm " + color;
  } else if (color == "warning") {
    toastm.style.color = "rgb(54,69,69)";
    toastm.className = "toastm " + color;
  } else if (color == "special") {
    toastm.className = "toastm " + color;
  } else if (color == "success") {
    toastm.className = "toastm " + color;
  }
  body.appendChild(toastm);
  setTimeout(() => {
    toastm.style.visibility = "visible";
    toastm.style.opacity = "1";
    toastm.style.top = "20px";
  }, options.seconds * 1000 || 1000);

  setInterval(() => {
    toastm.style.visibility = "hidden";
    toastm.style.opacity = "0";
    toastm.style.top = "0px";
  }, (options.seconds + 3) * 1000 || 4000);
}
