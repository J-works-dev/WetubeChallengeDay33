import "./styles.css";

const API_URL = "http://ip-api.com/json/";

fetch(API_URL).then((response) => response.blob());

let img = document.createElement("img");
img.style = "position:fixed;top:10px;left:10px;width:100px";
document.body.append(img);

img.src = URL.createObjectURL(response);

setTimeout(() => {
  img.remove();
  URL.revokeObjectURL(img.src);
}, 3000);
