
var winh = $(window).height()-100;
var winw = $(window).width()-30;

var game = new Phaser.Game(winw, winh, Phaser.AUTO, '', { preload: preload, create: create, update: update});

function preload () {
	game.load.image('rocket', 'assets/rocket.png');
	game.stage.backgroundColor = '#fff';
}

var rocket;

function create () {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
	rocket.anchor.set(0.5, 0.5);

	game.physics.arcade.enable(rocket, Phaser.Physics.ARCADE);
	rocket.allowRotation = false;
}

function update () {
	rocket.rotation = game.physics.arcade.moveToPointer(rocket, 60, game.input.activePointer, 500);
}