/// <reference path="behaviors/Behaviorable.ts" />

class Player extends Behaviorable {
    game: Phaser.Game;
    sprites: Phaser.Group;

    constructor(game: Phaser.Game, x: number, y: number) {
        super();
        this.game = game;
        var body = new Phaser.Sprite(game, x, y, 'tanks', 'tankBlue_outline');
        var turret = new Phaser.Sprite(game, x + (body.width / 2), y + (body.height / 2), 'tanks', 'barrelBlue_outline');
        turret.anchor.x = 0.5;

        this.sprites = this.game.add.group();
        this.sprites.add(body);
        this.sprites.add(turret);

        this.game.add.existing(this.sprites);
    }

    update() {
        super.update();
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.sprites.x -= 10;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.sprites.x += 10;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.sprites.y -= 10;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.sprites.y += 10;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            var barrel: PIXI.DisplayObject = this.sprites.getChildAt(1);
            barrel.rotation += 0.1;
            barrel.rotation = Phaser.Math.angleBetweenPoints(this.sprites.position, this.game.input.position);
        }
    }

    destroyed() {
        this.sprites.destroy();
    }
}