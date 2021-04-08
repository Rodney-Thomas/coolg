var canvas = document.getElementById('game');

function plus()
{
  function game()
  {
    text: (setText, color, font, xPos, yPos)=>{
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.font = font;
      ctx.fillText(setText, xPos, yPos);
    },
    entity: (color, xPos, yPos, width, height)=>{
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.rect(20, 20, width, height);
      ctx.stroke();
    },
    player: (color, startX, startY, width, height)=>{
      const ctx = canvas.getContext'2d');
      ctx.beginPath();
      ctx.strokeStyle = color;
    }
  }
  
}
