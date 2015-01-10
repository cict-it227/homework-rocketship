//By ELAIZA DURBAN and MARGIE ROSE BELLOS

//Sauce: https://github.com/photonstorm/phaser

//get window size using jquery
var winh = $(window).height() - 20;
var winw = $(window).width() - 20;

//call the main function when the browser starts
window.onload = function ()
{
    
    //initialize game
    var game = new Phaser.Game(winw, winh, Phaser.AUTO, '', { preload: preload, create: create, update: update});
    
    var rocket;
    
    
    //pre-define game assets and settings
    function preload ()
    {
        game.load.image('rocket', 'assets/rocket.png');
        game.stage.backgroundColor = '#94a4c4';
    }

    //call game assets and set its properties
    function create ()
    {        

        game.physics.startSystem(Phaser.Physics.ARCADE);        
        
        rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        rocket.anchor.setTo(0.5, 0.5);
        rocket.scale.setTo(0.5,0.5);
        
        game.physics.enable(rocket, Phaser.Physics.ARCADE);

        rocket.body.allowRotation = false;
    }

    function update()
    {
        
        if (game.input.activePointer.isDown)
        {
            var jump = 150;
        }

        rocket.rotation = game.physics.arcade.moveToPointer(rocket, 0, game.input.activePointer, jump) + 1.5;
    }
};
