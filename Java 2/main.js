
const canvas = document.getElementById('canvasId');
const g = canvas.getContext('2d');
 

function drawBackground() {
  
  const sky = g.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, '#081329');
  sky.addColorStop(1, '#3b6aa0');
  g.fillStyle = sky;
  g.fillRect(0, 0, canvas.width, canvas.height);
 
  
  g.fillStyle = '#ffffff';
  g.fillRect(0, canvas.height - 120, canvas.width, 120);
}
 
function jitter(max = 15) {
  return (Math.random() * 2 - 1) * max;
}

function drawStar(x, y, r, color = '#FFD700') {
  g.save();
  g.translate(x, y);
  g.beginPath();
  for (let i = 0; i < 5; i++) {
    g.lineTo(0, -r);
    g.translate(0, 0);
    g.rotate((Math.PI * 2) / 10);
    g.lineTo(0, -r / 2);
    g.rotate((Math.PI * 2) / 10);
  }
  g.closePath();
  g.fillStyle = color;
  g.fill();
  g.restore();
}
 

function drawHouse(x, y, s = 1) {
  
  g.fillStyle = '#745037ff';
  g.fillRect(x, y - 50 * s, 120 * s, 80 * s);
 
  
  g.beginPath();
  g.moveTo(x - 10 * s, y - 50 * s);
  g.lineTo(x + 60 * s, y - 120 * s);
  g.lineTo(x + 130 * s, y - 50 * s);
  g.closePath();
  g.fillStyle = '#6b392aff';
  g.fill();
 
  
  g.fillStyle = '#341d07ff';
  g.fillRect(x + 45 * s, y - 20 * s, 28 * s, 50 * s);
 
  
  g.fillStyle = '#ffe9a8';
  g.fillRect(x + 10 * s, y - 40 * s, 20 * s, 20 * s);
  g.fillRect(x + 90 * s, y - 40 * s, 20 * s, 20 * s);
 
  
  g.fillStyle = '#ffffff';
  g.beginPath();
  g.moveTo(x - 10 * s, y - 50 * s);
  g.quadraticCurveTo(x + 60 * s, y - 90 * s, x + 130 * s, y - 50 * s);
  g.fill();
}
 
function randomHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 40) + 60; 
  const l = Math.floor(Math.random() * 40) + 40;
  return `hsl(${h}, ${s}%, ${l}%)`;
}


function drawTree(x, y, s = 1) {
  
  g.fillStyle = '#5a3718';
  g.fillRect(x - 10 * s, y - 10 * s, 20 * s, 30 * s);

  g.fillStyle = '#0b8a2b';
  for (let i = 0; i < 3; i++) {
    g.beginPath();
    g.moveTo(x - 60 * s + i * 15 * s, y - 10 * s - i * 30 * s);
    g.lineTo(x, y - 90 * s - i * 30 * s);
    g.lineTo(x + 60 * s - i * 15 * s, y - 10 * s - i * 30 * s);
    g.closePath();
    g.fill();
  }

  const ornaments = [
    { dx: -20, dy: -45, c: randomHSL() },
    { dx: 15, dy: -60, c: randomHSL() },
    { dx: -5, dy: -20, c: randomHSL() },
    { dx: 5, dy: -90, c: randomHSL() },
    { dx: 20, dy: -30, c: randomHSL() },
    { dx: 20, dy: -30, c: randomHSL() },
  ];

  ornaments.forEach(o => {
    g.beginPath();
    g.fillStyle = o.c;
    g.arc(x + o.dx * s, y + o.dy * s, 6 * s, 0, Math.PI * 2);
    g.fill();
  });
}


function drawCard() {
  drawBackground();
 
  
  const stars = [
  { x: 120, y: 80, r: 12 },
  { x: 220, y: 40, r: 8 },
  { x: 430, y: 60, r: 10 },
  { x: 640, y: 90, r: 6 },
  { x: 20,  y: 40, r: 8 },
  { x: 730, y: 60, r: 10 },
  { x: 340, y: 90, r: 6 },
  ];

  stars.forEach(s => {
  drawStar(
    s.x + jitter(20),  
    s.y + jitter(15),  
    s.r
  );
  });

  drawHouse(700, canvas.height - 130, 1);
  drawHouse(170, canvas.height - 130, 1);
  drawHouse(560, canvas.height - 140, 0.8);
  drawHouse(30, canvas.height - 140, 0.8);
  drawHouse(460, canvas.height - 140, 0.8);
  drawTree(320, canvas.height - 100, 1.1);
  drawTree(450, canvas.height - 100, 0.9);
  drawTree(130, canvas.height - 100, 0.9);
  drawTree(650, canvas.height - 100, 1.1);
}
 
drawCard();
 