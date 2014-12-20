//the getting started guide can be found here: https://github.com/photonstorm/phaser/tree/master/resources/tutorials

//get window size using jquery
var winh = $(window).height()-20;
var winw = $(window).width()-20;

//call the main function when the browser starts
window.onload = function() {
    //initialize game
    var game = new Phaser.Game(winw, winh, Phaser.AUTO, '', { preload: preload, create: create });
    
    //pre-define game assets and settings
    function preload () {
        game.load.image('rocket', 'assets/rocket.png');
        game.stage.backgroundColor = '#fff';
    }
    
    //call game assets and set its properties
    function create () {
        var rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        rocket.anchor.setTo(0.5, 0.5);
        rocket.scale.setTo(0.5,0.5)
    }
};
