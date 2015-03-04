/// <reference path="behaviors/Behaviorable.ts" />
/// <reference path="../classes/behaviors/FireableBehavior.ts" />

class Player extends Behaviorable {
    game: Phaser.Game;
    tank: Phaser.Sprite;
    turret: Phaser.Sprite;
    currentSpeed: number = 0;

    constructor(game: Phaser.Game, x: number, y: number) {
        super();

        this.game = game;

        this.tank = this.game.add.sprite(x, y, 'tanks', 'tankBlue_outline');
        this.tank.anchor.setTo(0.5,0.5);
        this.tank.name = 'player';
        this.game.physics.arcade.enable(this.tank);
        this.tank.body.drag.set(0.2);
        this.tank.body.maxVelocity.setTo(400, 400);
        this.tank.body.collideWorldBounds = true;

        this.turret = this.game.add.sprite(this.tank.x, this.tank.y, 'tanks', 'barrelBlue_outline');
        this.turret.anchor.x = 0.5;

        this.addBehavior(new FireableBehavior(this.game, this.turret));

        //this.tank.bringToTop();
        //this.turret.bringToTop();
    }

    update() {
        super.update();

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {
            this.tank.angle -= 4;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
            this.tank.angle += 4;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
        {
            this.currentSpeed = 300;
        }
        else
        {
            if (this.currentSpeed > 0)
            {
                this.currentSpeed -= 4;
            }
        }

        if (this.currentSpeed > 0)
        {
            this.game.physics.arcade.velocityFromRotation(this.tank.rotation + Math.PI / 2, this.currentSpeed, this.tank.body.velocity);
        }

        this.turret.position = this.tank.position;
        this.turret.rotation = this.game.physics.arcade.angleToPointer(this.turret) - Math.PI/2;
    }

    destroyed(): void {
        this.tank.destroy();
        this.turret.destroy();
    }
}