const myButton = document.querySelector("#myButton");
const pizzas = [
    "Margherita - tomatsås, ost",
    "Vesuvio - tomatsås, ost, skinka",
    "Capricciosa  - tomatsås, ost, skinka, champinjoner",
    "Hawaii -  - tomatsås, ost, skinka, ananas",
    "Calzone - tomatsås, ost, skinka(inbakad)"
];
myButton.addEventListener("click", function(){ const randomItem = pizzas[Math.floor(Math.random() * pizzas.length)];  alert(randomItem)})