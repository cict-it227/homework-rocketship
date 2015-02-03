//the getting started guide can be found here: https://github.com/photonstorm/phaser/tree/master/resources/tutorials



//call the main function when the browser starts
window.onload = function() {

    //initialize game
    var game = new Phaser.Game(700, 400, Phaser.CANVAS, '', { preload: preload, create: create,update: update });
    
    //pre-define game assets and settings
    function preload () {
        game.load.image('rocket', 'assets/rocket.png');
        game.load.image('space', 'assets/space.jpg');
    }
	
	var move;
    
    //call game assets and set its properties
    function create () {
		game.add.sprite(0, 0, 'space');
        move = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        move.anchor.setTo(0.5, 0.5);
        move.scale.setTo(0.5,0.5);
    }
	
	function update(){
	if(game.input.keyboard.isDown(Phaser.Keyboard.A))
	{
		move.x -= 5;
	}
	else if(game.input.keyboard.isDown(Phaser.Keyboard.D))
	{
		move.x += 5;
	}
	if(game.input.keyboard.isDown(Phaser.Keyboard.S))
	{
		move.y += 5;
	}
	else if(game.input.keyboard.isDown(Phaser.Keyboard.W))
	{
		move.y -= 5;
	}
	}
};
