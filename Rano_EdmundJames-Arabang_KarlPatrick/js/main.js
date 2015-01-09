//the getting started guide can be found here: https://github.com/photonstorm/phaser/tree/master/resources/tutorials

//get window size using jquery
var winh = $(window).height()-150;
var winw = $(window).width()-200;

//call the main function when the browser starts
window.onload = function() {
    //initialize game
    var game = new Phaser.Game(winw, winh, Phaser.AUTO, '', { preload: preload, create: create, update: update});
    
    //pre-define game assets and settings
    function preload () {
        game.load.image('rocket', 'assets/rocket.png');
		game.load.image('fireball', 'assets/fireball.png');
        game.stage.backgroundColor = '#fff';
    }
    var rocket;
	var fireballs;
	var fireRate = 100;
	var nextFire = 0;
    //call game assets and set its properties
    function create () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
        rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        rocket.anchor.setTo(0.5, 0);
        rocket.scale.setTo(0.5,0.5);
		//PHASER ACCELERATE TO POINTER
		game.physics.enable(rocket, Phaser.Physics.ARCADE);
		rocket.body.allowRotation = false;
		
		//PHASER SHOOT TO POINTER
		fireballs = game.add.group();
		fireballs.enableBody = true;
		fireballs.physicsBodyType = Phaser.Physics.ARCADE;
		
		fireballs.createMultiple(50, 'fireball');
		fireballs.setAll('checkWorldBounds', true);
		fireballs.setAll('outOfBoundsKill', true);
    }
	function update() 
	{
		rocket.rotation = game.physics.arcade.moveToPointer(rocket, 60, game.input.activePointer, 500)+1.5;
		if (game.input.activePointer.isDown)
		{
			shoot();
		}
	}
	
	function shoot()
	{
		//PHASER SHOOT TO POINTER
		if (game.time.now > nextFire && fireballs.countDead() > 0)
		{
			nextFire = game.time.now + fireRate;
			var fireball = fireballs.getFirstDead();
			fireball.reset(rocket.x , rocket.y );
			game.physics.arcade.moveToPointer(fireball, 1200);
		}
		
		
	}
	
};
