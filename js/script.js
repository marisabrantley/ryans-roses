var available = document.querySelector("h3");
console.log(available);

var mainTitle = document.querySelector(".main-title");
console.log(mainTitle);

var firstItem = document.querySelector("ul li");
console.log(firstItem);

var intro = document.querySelector(".intro p");
console.log(intro);

var intro = document.querySelector(".intro p");
intro.style.color = "purple";
console.log(intro);

var firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "Lulu bouquet";
console.log(firstImg);

var firstCaption = document.querySelector("figcaption");
firstCaption.innerText = "The Lulu.";

firstCaption.innerHTML = "The<strong>Lulu</strong>";

var intro = document.querySelector(".intro p");
intro.innerHTML = 'Available <span class="increase_size">today</span>';

var attention = document.querySelector(".increase_size");
attention.style.fontSize = "2.5em";
