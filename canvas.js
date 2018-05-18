let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

let radius = 3;
function cic ()  {
    c.beginPath();
    c.arc(500, y, 3, 0, Math.PI * 2);
    c.stroke();
    dy = 0;
    radius +=1;
}



let y = innerHeight;
let dy = 20;
function animate () {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(500, y, radius, 0, Math.PI * 2);
    c.stroke();

    dy -= .3;
    y -= dy;
    console.log(dy)
    if (dy === 0 || dy < 0) {
        cic();
    }
}

animate();
