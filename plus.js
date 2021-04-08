var canvas = document.getElementById('game');

function plus()
{
  function game()
  {
    text: (setText, color, font, xPos, yPos)=>{
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.fillText(setText, xPos, yPos);
      }
    },
    ent: (type, color, xPos, yPos, width, height)=>{
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.rect(20, 20, width, height);
        ctx.stroke();
      }
    }
  }
  
}
