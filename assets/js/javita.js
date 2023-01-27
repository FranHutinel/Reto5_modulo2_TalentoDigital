let counter = 0;
let message = "¡Stop dude! You have clicked so many times o__Ó ..."

function countingClicks() {
    document.getElementById("counting").innerHTML = ++counter;
    if(counter > 10) {
        document.getElementById("warning").innerHTML = message;

    }
}