// to be able to draw on the html canvas,
// we need to find the canas element using the HTML DOM method
const canvas = document.getElementById('draw');
// you don't draw on the canvas directly,
// you draw it on the 2d context - this is the drawing board (where all your drawing happens!!!)
// .getContext() method returns a drawing context on the canvas
// 2d - 2 dimensional rendering
const ctx = canvas.getContext('2d');
// size up the canvas so it's the exact width of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

// create a flag where we set it to false
// when you click down, we set it to true
let isDrawing = false;
// you need a starting x and y 
// and ending x and y
// created a lastX and lastY that's going to be where do you start the line from and where to end
let lastX = 0;
let lastY = 0;
let hue = 0;
// let direction = true; 

// this function will be called whenever you move your mouse
function draw(e) {
  if(!isDrawing) return; //stop the function from running when they are not moused down
  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // start from
  ctx.beginPath();
  // go to
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY); //offsetX/Y values are coming from the actual event that happens
  ctx.stroke();

  // lastX = e.offsetX;
  // lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY]; //destructuring
  hue++;
  // resets the hue back to 0 so the colour goes back to red
  if(hue >= 360) {
    hue = 0;
  }

  // for every loop, we are going to implement the line width
  // we are incrementing the width from 0 to 100 
  // and the width goes back down if it's greater than 100
  // if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  //   direction = !direction;
  // }
  // if(direction) {
  //   ctx.lineWidth++;
  // } else {
  //   ctx.lineWidth--;
  // }
}

// event listener on the canvas
// to detect mouse movement
// once detected, it will call the draw function
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  // update our lastX and lastY
  [lastX, lastY] = [e.offsetX, e.offsetY];
});