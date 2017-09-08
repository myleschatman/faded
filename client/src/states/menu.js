export default class Menu extends Phaser.State {
    create() {
        let style = { font: '48px Arial', fill: '#ff0044', align: 'center' };

        let start = this.add.text(this.world.centerX-310, this.world.centerY+100, 'Start', style);
        let options = this.add.text(this.world.centerX-280, this.world.centerY+180, 'Options', style);

        start.anchor.set(0.5);
        options.anchor.set(0.5);

        this.enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.enter.onDown.add(this.startGame, this);
    }

    startGame() {
        this.state.start('game');
    }
}
