import Knight from '../prefabs/knight';

export default class Game extends Phaser.State {
    constructor() {
        super();
    }
    create() {
        this.player = new Knight(this.game, 400, 300, 'knight');
        this.add.existing(this.player);
    }
}
