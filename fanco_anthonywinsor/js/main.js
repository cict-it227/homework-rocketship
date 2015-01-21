//Anthony Winsor S. Fanco
//BSIT - 4A

//call the main function when the browser starts
window.onload = function() 
	{
    //initialize game
	var game = new Phaser.Game(715, 480, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('sky', 'assets/background.png');
    game.load.image('rocket', 'assets/ship.png');
}

var rocket;

function create() {

	game.add.sprite(0, 0, 'sky');
    rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
    rocket.anchor.setTo(0.5, 0.5);
    rocket.scale.setTo(0.5, 0.5);


}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        rocket.x -= 10;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        rocket.x += 10;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        rocket.y -= 10;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        rocket.y += 10;
    }
}


};
