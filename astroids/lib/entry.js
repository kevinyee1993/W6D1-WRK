document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  canvas.width = 500;
  canvas.height = 500;


  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "blue";
  ctx.fillRect(0,0,500,500);


// const canvasEl = document.getElementById("game-canvas");
// canvasEl.width = 500;
// canvasEl.height = 500;
//
// const ctx = canvasEl.getContext("2d");
// ctx.fillStyle = "purple";
// ctx.fillRect(0, 0, 500, 500);
});
