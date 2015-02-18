/// <reference path="behaviors/Behaviorable.ts" />

class Player extends Behaviorable {
    game: Phaser.Game;
    tank: Phaser.Sprite;
    turret: Phaser.Sprite;
    speed: number

    constructor(game: Phaser.Game, x: number, y: number) {
        super();
        this.game = game;
        this.tank = this.game.add.sprite(x, y, 'tanks', 'tankBlue_outline');
        this.tank.anchor.setTo(0.5,0.5);
        this.turret = this.game.add.sprite(this.tank.x, this.tank.y, 'tanks', 'barrelBlue_outline');
        this.turret.anchor.x = 0.5;

        this.tank.name = 'player';
        this.game.physics.enable(this.tank, Phaser.Physics.ARCADE, true);
        this.tank.body.immovable = false;
        this.tank.body.drag.set(0.2);
        this.tank.body.maxVelocity.setTo(400, 400);
        this.tank.body.collideWorldBounds = true;

        this.speed = 0;
    }

    update() {
        super.update();

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.tank.angle += 4;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.tank.angle -= 4;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
        {
            this.speed = 300;
        }
        else
        {
            if (this.speed > 0)
            {
                this.speed -= 4;
            }
        }

        if (this.speed > 0)
        {
            this.game.physics.arcade.velocityFromRotation(this.tank.rotation, this.speed, this.tank.body.velocity);
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