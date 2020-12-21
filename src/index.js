import "./styles.css";

const API_URL = "http://ip-api.com/json/";
const result = document.querySelector(".result");

result.innerHTML = "You are...";
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const { city, country, timezone } = data;
    result.innerHTML = `You are in ${city} in ${country}, and time zone is ${timezone}.`;
  })
  .catch((e) => {
    console.log(e);
    result.innerHTML = "Can't find. Where you are?";
  });

// let img = document.createElement("img");
// img.style = "position:fixed;top:10px;left:10px;width:100px";
// document.body.append(img);

// img.src = URL.createObjectURL(response);

// setTimeout(() => {
//   img.remove();
//   URL.revokeObjectURL(img.src);
// }, 3000);
