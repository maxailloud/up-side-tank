/// <reference path="BaseBehavior.ts" />

class FireableBehavior extends BaseBehavior {

    game: Phaser.Game;
    name: string = "Fireable";
    turret: Phaser.Sprite;

    bullets: Phaser.Group;
    fireRate: number = 100;
    nextFire: number = 0;

    constructor(game: Phaser.Game, turret: Phaser.Sprite) {
        super();

        this.game = game;
        this.turret = turret;
        this.bullets = this.game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(30, 'tanks', 'bulletBlue', false);
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 0.5);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
    }

    update(): void {
        if (this.game.input.activePointer.isDown)
        {
            this.fire();
        }
    }

    fire(): void {
        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
        {
            this.nextFire = this.game.time.now + this.fireRate;

            var bullet = this.bullets.getFirstExists(false);

            bullet.reset(this.turret.x, this.turret.y);

            bullet.rotation = this.game.physics.arcade.moveToPointer(bullet, 1000, this.game.input.activePointer, 500);
        }
    }
}