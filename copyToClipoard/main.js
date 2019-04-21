function getColor() {
    var color = "#";
    var symbols = "0123456789abcdef";

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    document.querySelector("#color-generated").textContent = color;
}

function copyColor() {
    var selectedColor = document.querySelector('.Generator #color-generated');

    var range = document.createRange();
    range.selectNode(selectedColor);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        selection.removeAllRanges();
        var original = selectedColor.textContent;
        selectedColor.textContent = 'Copied!';
        selectedColor.classList.add('success');
        setTimeout(() => {
            selectedColor.textContent = original;
            selectedColor.classList.remove('success');
        }, 1000);
    } catch (e) {
        console.log(e);
    }


}
