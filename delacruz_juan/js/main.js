//get window size using jquery

var winh = $(window).height()-20;
var winw = $(window).width()-20;

window.onload = function() {

    var game = new Phaser.Game(winw, winh, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {
        game.load.image('rocket', 'assets/rocket.png');
        game.stage.backgroundColor = '#fff';
    }

    function create () {
        var rocket = game.add.sprite(game.world.centerX, game.world.centerY, 'rocket');
        rocket.anchor.setTo(0.5, 0.5);
        rocket.scale.setTo(0.5,0.5)
    }

};
