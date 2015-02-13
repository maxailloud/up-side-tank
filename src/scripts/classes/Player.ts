/// <reference path="FlammableBehavior.ts" />
/// <reference path="BreakableBehavior.ts" />
/// <reference path="behaviors/Behaviorable.ts" />

class Player extends Behaviorable {
    game: Phaser.Game;
    body: Phaser.Sprite;
    turret: Phaser.Sprite;

    constructor(game: Phaser.Game, x: number, y: number) {
        super();
        this.game = game;
        this.body = new Phaser.Sprite(game, x, y, 'tanks', 'tankBlue_outline');
        this.turret = new Phaser.Sprite(game, x + (this.body.width / 2), y + (this.body.height / 2), 'tanks', 'barrelBlue_outline');
        this.turret.position = new Phaser.Point(this.turret.x - (this.turret.width / 2), this.turret.y - 8);
        this.game.add.existing(this.body);
        this.game.add.existing(this.turret);
        this.create();
    }

    create() {
        console.log("[Door] :: create");
        var Flammable = this.addBehavior(new FlammableBehavior());
        var Breakable = this.addBehavior(new BreakableBehavior());

        Flammable.onBurnt.add(Breakable.break, Breakable);
        Breakable.onBroken.add(function() {
            this.destroyed();
        }, this);
    }

    update() {
        super.update();
    }

    destroyed() {
        this.body.destroy();
        this.turret.destroy();
    }
}