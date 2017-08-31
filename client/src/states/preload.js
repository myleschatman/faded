export default class Preload {
    preload() {
        this.load.spritesheet('knight', 'assets/knight.png', 64, 64, 196);
    }

    create() {
        this.game.state.start('game');
    }
}
