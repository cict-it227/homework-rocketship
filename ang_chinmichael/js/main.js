//SUBMITTED BY: CHIN MICHAEL B. ANG
//BSIT IV - A

//call the main function when the browser starts
window.onload = function() 
	{
    //initialize game

	
	
	
	var game = new Phaser.Game(720, 480, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('sky', 'assets/sky.png');
        game.load.image('rocket', 'assets/rocket.png');
}

var s;

function create() {

game.add.sprite(0, 0, 'sky');
    s = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
    s.anchor.setTo(0.5, 0.5);
    s.scale.setTo(0.5, 0.5);


}

function update() {

//MOVEMENT CODES RETRIEVED FROM http://examples.phaser.io/sideview.html (MOVING A SPRITE)

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        s.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        s.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        s.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        s.y += 4;
    }

}


	
};
