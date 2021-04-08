var canvas = document.getElementById('game'); // Sets game canvas

function plus()
{
  function game()
  {
    // Text Engine
    text: (setText, color, font, xPos, yPos)=>{
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.font = font;
      ctx.fillText(setText, xPos, yPos);
    },

    // Entity Engine (enemies, background objects)
    entity: (color, xPos, yPos, width, height)=>{
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.rect(20, 20, width, height);
      ctx.stroke();
    },

    // Entity Engine (For the player)
    player: (color, startX, startY, width, height)=>{
      const ctx = canvas.getContext'2d');
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.rect(20, 20, width, height);
    },
      
    title: (setTitle)=>{
      var titleDone = setTitle;
    },
    
    description: (setDesc)=>{
      var descDone = setDesc;
    },
     
    version: (setVer)=>{
      var verDone = setVer;
    },

    // API CONNECTION
    api: (connection, connection2, connection3)=>{
       // Set API types
       var apiTitle = getElementById(connection);
       var apiDesc = getElementById(connection2);
       var apiVer = getElementById(connection3);
       // Set UI to API names
    }
  }
  
}
