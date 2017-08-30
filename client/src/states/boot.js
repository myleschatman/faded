export default class Game extends Phaser.State{
    preload() {
        game.load.image('knight', '../assets/knight.png');
    }
    create() {
        var knight;
        knight = game.add.sprite(400, 300, 'knight');
    }
    update() {

    }
}
