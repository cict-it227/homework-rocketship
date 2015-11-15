//the getting started guide can be found here: https://github.com/photonstorm/phaser/tree/master/resources/tutorials

//get window size using jquery
var winh = $(window).height()-20;
var winw = $(window).width()-20;


//call the main function when the browser starts
window.onload = function() {
    //initialize game
    var game = new Phaser.Game(winw, winh, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    //pre-define game assets and settings
    function preload () {
        game.load.image('rocket', 'assets/rocket.png');
        game.stage.backgroundColor = '#fff';
    }
    var rocket;
    //call game assets and set its properties
    function create () {
        
        rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        rocket.anchor.setTo(0.5, 0.5);
        rocket.scale.setTo(0.5,0.5)

    }

    function update (){

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        rocket.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        rocket.y += 4;
    }
}

};
