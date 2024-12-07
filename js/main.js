import { data } from "./data.js"; //date imoirtis shemotanis dros myfunqcia itisheba
//  davalba-1

function myfunction() {
  document.getElementById("start-interval").style.display = "none";
}

// davaleba-2
// const body = document.querySelector("#change");
// const images = document.createElement("IMG");
// images.setAttribute("src", "https://picsum.photos/id/180/2000/1600");
// body.append(images);
// function imgfunction() {
//   let image = document.getElementById("myImg");
//   image.setAttribute("src", "https://picsum.photos/id/180/2000/1600");
//   body.appendChild("myImg");
// }
// function imgfunction() {
//   let x = (document.getElementById("myImg").alt =
//     "https://picsum.photos/id/180/2000/1600");
// }

// function imgfunction() {
//   document
//     .getElementById("myImg")
//     .setAttribute("src", "https://picsum.photos/id/180/2000/1600");
// }

// function imgfunction() {
//   var x = document.getElementById("myImg").src;
//   document.getElementById("demo").innerHTML =
//     "https://picsum.photos/id/180/2000/1600";
// }

function imgfunction() {
  let x = document.createElement("IMG");
  x.setAttribute("src", "https://picsum.photos/id/180/2000/1600");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}

// davaleba--3

const product = document.querySelector("product-list");

// davaleba==4

let newarr = ["1-წლიანი გარანტიით.PS4  500gb 2ჯოისტიკით+ 400თამაში"];
document.getElementById("PS4").innerHTML = newarr.map(Math.sqrt);
