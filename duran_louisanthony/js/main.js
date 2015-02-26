//get window size using jquery

//var winh = $(window).height() - 20;
//var winw = $(window).width() - 20;

window.onload = function () {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, });

    function preload() {
        game.load.image('rocket', 'assets/rocket.png');
        game.stage.backgroundColor = '#fff';
    }

    var rocket;    
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    var cursors;
    
    function create() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // This rocket implements the angularVelocity Movement
        rocket = game.add.sprite(game.world.centerX + 50, game.world.centerY + 50, 'rocket');
        rocket.anchor.setTo(0.5, 0.5);
        game.physics.enable(rocket, Phaser.Physics.ARCADE);
        cursors = game.input.keyboard.createCursorKeys();
        rocket.body.collideWorldBounds = true;
    }
    
    function update() {
        rocket.body.velocity.x = 0;
        rocket.body.velocity.y = 0;
        rocket.body.angularVelocity = 0;
        
        if(cursors.left.isDown) rocket.body.angularVelocity = -200;
        else if(cursors.right.isDown) rocket.body.angularVelocity = 200;        
        if(cursors.up.isDown) game.physics.arcade.velocityFromAngle(rocket.angle, 300, rocket.body.velocity);

    }

};
