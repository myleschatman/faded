export default class Preload {
    preload() {
        this.load.spritesheet('knight', 'assets/knight.png', 64, 64, 760);
    }

    create() {
        this.game.state.start('game');
    }
}
