export default class Player extends Phaser.Sprite {
    constructor(game, x, y, job) {
        super(game, x, y, job, 0);

        this.game.physics.arcade.enable(this);
        this.game.physics.arcade.enableBody(this);

        this.animations.add('walk-left', [0], 9, true);
        this.animations.add('walk-right', [0], 9, true);

        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        // player moves in specified direction or stands still
        if (this.cursors.left.isDown) {
            this.animations.play("walk-left");
            this.body.velocity.x =- 180;
        } else if (this.cursors.right.isDown) {
            this.animations.play("walk-right");
            this.body.velocity.x =+ 180;
        } else {
            this.body.velocity.x = 0;
        }
        if (this.cursors.up.isDown) {
            this.animations.play("walk-up");
            this.body.velocity.y =- 180;
        } else if (this.cursors.down.isDown) {
            this.animations.play("walk-down");
            this.body.velocity.y =+ 180;
        } else {
            this.body.velocity.y = 0;
        }
        if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
            this.animations.stop();
        }
    }
}
