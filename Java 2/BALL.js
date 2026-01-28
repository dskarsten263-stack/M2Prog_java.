const canvas = document.getElementById("canvasId")
const g = canvas.getContext("2d")

function RandomHSL() {
    let h = Math.floor(Math.random() * 360); 
    let s = Math.floor(Math.random() * 50) + 50; 
    let l = Math.floor(Math.random() * 40) + 30; 
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function ball(xPos, yPos, zPos, KIES){
g.fillStyle = KIES;
g.beginPath();
g.arc(xPos, yPos, zPos, 0, Math.PI * 2);
g.closePath();
g.fill();
g.stroke(); 
}

ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());
ball(Math.random()*900, Math.random()*500, Math.random()*20, RandomHSL());



