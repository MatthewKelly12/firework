let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.beginPath);
c.arc()


let y = innerHeight;
let dy = 20;
function animate () {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(500, y, 8, 0, Math.PI * 2);
    c.fill();
    dy -= .3;
    y -= dy;

}

animate();
