const myButton = document.querySelector("#myButton");
let clicks = 0;
let numFollowingString = ":a"
myButton.addEventListener("click", function(){ clicks++; if(clicks > 2) {numFollowingString = ":e";} alert(`Det var ${clicks}${numFollowingString} gången du klickade på knappen. Bra jobbat.`)})