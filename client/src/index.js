import Boot from './states/boot';

var game = new Phaser.Game(800, 450, Phaser.AUTO, 'game');

game.state.add('boot', new Boot());

game.state.start('boot');
