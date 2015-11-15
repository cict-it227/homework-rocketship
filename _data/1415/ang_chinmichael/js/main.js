//SUBMITTED BY: CHIN MICHAEL B. ANG
//BSIT IV - A

//call the main function when the browser starts
window.onload = function () 
{
	//initialize game
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
	function preload() 
	{

		game.load.image('sky', 'assets/aiur.jpg');
		game.load.image('ammo', 'assets/ceptor.png');
		game.load.image('rocket', 'assets/carrier.png');
		game.load.audio('intro', 'assets/arrived.mp3');

	}

	var music;
	var s;
	var ammo;
	var ammos;
	var ammoTime = 0;
	
	function create() 
	{
	//PLAY MUSIC CODES RETRIEVED FROM http://examples.phaser.io/index.html (PLAY MUSIC)
	music = game.add.audio('intro');
	//" Carrier has Arrived! " FTW!!
    music.play();
	
    game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;
	game.input.touch.preventDefault = false;
	
	//GRAVITY CODES RETRIEVED FROM http://examples.phaser.io/index.html (GRAVITY)
    game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 400;
    game.add.tileSprite(0, 0, game.width, game.height, 'sky');

    //SHOOTER CODES RETRIEVED FROM http://examples.phaser.io/index.html (ASTEROIDS MOVEMENT)
    ammos = game.add.group();
    ammos.enableBody = true;
    ammos.physicsBodyType = Phaser.Physics.ARCADE;
  
    ammos.createMultiple(69, 'ammo');
    ammos.setAll('anchor.x', 0.5);
    ammos.setAll('anchor.y', 0.5);

    s = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
    s.anchor.set(0.5);
	//s.scale.setTo(0.5, 0.5);  

    game.physics.enable(s, Phaser.Physics.ARCADE);
	
    s.body.bounce.set(2);
	s.body.gravity.set(0, 4000);

    shootButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	WButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
	AButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
	SButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
	DButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
	
	}
	
	function update() 
	{

    //MOVEMENT CODES RETRIEVED FROM http://examples.phaser.io/index.html (MOVING A SPRITE)    
        s.body.velocity.x = 0;
        s.body.velocity.y = 0;
        s.body.angularVelocity = 0;
	//ANGULAR VELOCITY CODES RETRIEVED FROM http://examples.phaser.io/index.html (ANGULAR VELOCITY) 	
	if (AButton.isDown)
    {
		s.body.angularVelocity = -200;
    }
    else if (DButton.isDown)
    {
        s.body.angularVelocity = 200;
    }
    if (WButton.isDown)
    {
		game.physics.arcade.velocityFromAngle(s.angle, 300, s.body.velocity);
    }
    else if (SButton.isDown)
    {
		game.physics.arcade.velocityFromAngle(s.angle, -200, s.body.velocity);
    }

    if (shootButton.isDown)
    {
        fireammo();
    }
	
    screenWrap(s);
    ammos.forEachExists(screenWrap, this);

	}

	function fireammo () 
	{

    if (game.time.now > ammoTime)
    {
        ammo = ammos.getFirstExists(false);

        if (ammo)
        {
            ammo.reset(s.body.x + 66, s.body.y + 66);
            ammo.lifespan = 5000;
            ammo.rotation = s.rotation;
            game.physics.arcade.velocityFromRotation(s.rotation, 360, ammo.body.velocity);
            ammoTime = game.time.now + 50;
        }
    }

	}

	function screenWrap (s) 
	{

    if (s.x < 0)
    {
        s.x = game.width;
    }
    else if (s.x > game.width)
    {
        s.x = 0;
    }

    if (s.y < 0)
    {
        s.y = game.height;
    }
    else if (s.y > game.height)
    {
        s.y = 0;
    }

	}

	function render() 
	{

	}

};
