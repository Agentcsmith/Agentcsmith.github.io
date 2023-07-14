$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

     //Loop to create vertical grid lines
    //for (let i = 100; i < canvas.width; i += 100) {
     //   createPlatform(i, 0, 1, canvas.height);
    //  }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
       //createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(100, 600, 200, 15); //top
     
    createPlatform(700, 400, 200, 30); //top
    createPlatform(400, 400, 200, 30); //top

    createPlatform(1200, 375, 100, 40); //top
    createPlatform(1100, 500, 100, 40); //top
    createPlatform(200, 500, 100, 40); //top
    createPlatform(1000, 200, 100, 40); //top
    
    
    
     
    createPlatform(800, 680, 100,10 ); //bottoms stairs
    createPlatform(900, 600, 100, 10 ); //bottom stairs
    createPlatform(1000, 575, 100,10 ); //bottom stairs
    

   

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 1000, 400, 0.9);
    createCollectable("kennedi", 1200, 100);
    createCollectable("database", 400, 200,);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top",600,1000);
    createCannon("top",400,700);
    createCannon("top",200,1000);
    createCannon("top",800,1000);
    createCannon("top",1000,1800);
    createCannon("right",350,1700);
    createCannon("right",700,3000);
    createCannon("bottom",600,3000);
    



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
