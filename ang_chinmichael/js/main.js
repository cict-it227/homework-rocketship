//SUBMITTED BY: CHIN MICHAEL B. ANG
//BSIT IV - A

//call the main function when the browser starts
window.onload = function () 
{
	//initialize game
    var game = new Phaser.Game(720, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update, });
    function preload() 
	{
	
        game.load.image('rocket', 'assets/rocket.png');
        game.load.image('sky', 'assets/sky.png');
		
    }

    var s;
	
    function create() 
	{
	
        //GRAVITY CODES RETRIEVED FROM http://examples.phaser.io/sideview.html (GRAVITY)
        game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 400;
        game.add.sprite(0, 0, 'sky');
		s = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        s.anchor.setTo(0.5, 0.5);
		s.scale.setTo(0.5, 0.5);    
        game.physics.enable(s, Phaser.Physics.ARCADE);	
		s.body.bounce.y = 0.8;
		s.body.gravity.y = 5000;
        s.body.collideWorldBounds = true;

    }
    
    function update() 
	{
	
    //MOVEMENT CODES RETRIEVED FROM http://examples.phaser.io/sideview.html (MOVING A SPRITE)    
        s.body.velocity.x = 0;
        s.body.velocity.y = 0;
        s.body.angularVelocity = 0;
	//ANGULAR VELOCITY CODES RETRIEVED FROM http://examples.phaser.io/sideview.html (ANGULAR VELOCITY) 	
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        s.x -= 4;
		s.body.angularVelocity = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        s.body.angularVelocity = 200;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        s.y -= 4;
		game.physics.arcade.velocityFromAngle(s.angle, 300, s.body.velocity);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        s.y += 4;
		game.physics.arcade.velocityFromAngle(s.angle, -200, s.body.velocity);
    }
	
	
	
    }

};
