//the getting started guide can be found here: https://github.com/photonstorm/phaser/tree/master/resources/tutorials

//get window size using jquery
var winh = $(window).height() - 20;
var winw = $(window).width() - 20;

//call the main function when the browser starts
window.onload = function () {
    
    //initialize game
    var game = new Phaser.Game(winw, winh, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
    
    //initialize variables
    var rocket;
    var text = "- Project Lupad - \n\n by Stephen O. Juridico BSIT 4-A \n\n\n Instructions:\n\n Move mouse to navigate the ship.\n\nLeft Click to use boosters.\n";
    var style = { font: "14px Courier New", fill: "#fff", align: "center" };
    
    //pre-define game assets and settings
    function preload () {
        //game.load.image('rocket', 'assets/rocket.png');
        game.load.image('rocket', 'assets/rocket_white.png'); // Added new rocket with diff. color to match the background
        game.load.image('starfield', 'assets/starfield.jpg');
    }

    //call game assets and set its properties
    function create () {        
        // Initialize Arcade Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // Initialize Background
        game.add.tileSprite(0, 0, winw, winh, 'starfield');
        //game.stage.backgroundColor = '#0072bc';
       
        
        // Author & Instructions
        game.add.text(32, 32, text, style);        
        
        rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        rocket.anchor.setTo(0.5, 0);
        rocket.scale.setTo(0.5,0.5);
        

         //  Enable Arcade Physics for the sprite
        game.physics.enable(rocket, Phaser.Physics.ARCADE);

        //  Tell it we don't want physics to manage the rotation
        rocket.body.allowRotation = false;


    }

    function update(){
        var timeTravel = 500;
        
        if (game.input.activePointer.isDown)
        {
            timeTravel = 150;
        }
        
         // Since the rotation was kinda off just added 1.5 to the value to make it right
        rocket.rotation = game.physics.arcade.moveToPointer(rocket, 60, game.input.activePointer, timeTravel) + 1.5;
    }

    function render(){
        
        // informations
        //game.debug.spriteInfo(rocket, 32, 32);
       // game.debug.renderSpriteBounds(rocket, );
    }
    
    function recolor () {

    // replaceRGB: function (sourceR, sourceG, sourceB, sourceA, destR, destG, destB, destA, region) {

	rocket.replaceRGB(0, 85, 255, 255, 0, 250, 40, 255);

}
};
