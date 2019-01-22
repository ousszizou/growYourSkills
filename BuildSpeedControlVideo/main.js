var speed = document.querySelector('.control-speed');
var barSpeed = document.querySelector('.speed-bar');
var video = document.querySelector('video');


function handleMouse(e) {
    var y = (e.y - 99) - this.offsetTop;
    var percent = y / this.offsetHeight;
    var min = 0.5;
    var max = 4;
    var height = Math.round(percent * 100) + '%';
    var playbackRate = percent * (max - min) + min;
    barSpeed.style.height = height;
    barSpeed.innerHTML = "<span>" + playbackRate.toFixed(1) + 'x' + "</span>";
    video.playbackRate = playbackRate;
    if(playbackRate < 1) {
        document.querySelector('span').style.color = '#7b7b7b';
    }
    console.log(percent);
}
speed.addEventListener('mousemove', handleMouse);
