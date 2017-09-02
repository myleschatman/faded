export default class Boot {
    preload() {
        this.load.image('preloader', 'assets/loading_bar.png');
    }
    create() {
        this.game.state.start('preload');
    }
}
