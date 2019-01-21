/*

- color syntax => #FFFFFF;
- Math.floor()
- Math.random()

*/

function getColor() {
    var color = "#";
    var symbols = "0123456789abcdef";

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    document.body.style.background = color;
    document.querySelector("#color-generated").textContent = color;
}
