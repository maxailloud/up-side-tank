/// <reference path="../classes/Player.ts" />
/// <reference path="../classes/behaviors/FireableBehavior.ts" />

class Play extends Phaser.State {

    sprite: Phaser.Sprite;
    player: Player;

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.setBounds(-500, -500, 1000, 1000);

        this.player = new Player(this.game, 350, 350);
        this.player.addBehavior(new FireableBehavior(this.game));

        this.game.onPause.add(function() {
            console.log('pause...');
        });
        this.game.onResume.add(function() {
            console.log("...resume");
        });
    }

    update() {
        this.player.update();
    }
}