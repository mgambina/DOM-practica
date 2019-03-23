var epigraph = document.querySelector("div")
console.log(epigraph)

epigraph.classList.add("green");

var count = 0;
var like = 0;

function fill() {
    count++
    if(count % 2 !== 0) {
        like++;
        console.log(like)
    }
    var icons = document.querySelector("#corazon");
    icons.classList.toggle("fas")
}


