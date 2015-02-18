/// <reference path="behaviors/Behaviorable.ts" />

class Player extends Behaviorable {
    game: Phaser.Game;
    tank: Phaser.Sprite;
    turret: Phaser.Sprite;

    constructor(game: Phaser.Game, x: number, y: number) {
        super();
        this.game = game;

        this.tank = this.game.add.sprite(x, y, 'tanks', 'tankBlue_outline');
        this.tank.rotation -= Math.PI;
        this.tank.anchor.setTo(0.5,0.5);
        this.tank.name = 'player';
        this.game.physics.p2.enable(this.tank);
        this.tank.body.fixedRotation = true;
        this.tank.body.collideWorldBounds = true;

        this.turret = this.game.add.sprite(this.tank.x, this.tank.y, 'tanks', 'barrelBlue_outline');
        this.turret.anchor.x = 0.5;
    }

    update() {
        super.update();

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.tank.angle -= 4;
            this.tank.body.angle -= 4;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.tank.angle += 4;
            this.tank.body.angle += 4;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.tank.body.thrust(100);
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.tank.body.reverse(100);
        }

        this.turret.x = this.tank.x;
        this.turret.y = this.tank.y;

        this.turret.rotation = this.game.physics.arcade.angleToPointer(this.turret) - Math.PI/2;

        if (this.game.input.activePointer.isDown)
        {
            this.fire();
        }
    }

    destroyed(): void {
        this.tank.destroy();
        this.turret.destroy();
    }

    fire(): void {
        console.log('fire');
    }
}