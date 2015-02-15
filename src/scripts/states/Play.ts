/// <reference path="../classes/Player" />

class Play extends Phaser.State {

    sprite: Phaser.Sprite;
    player: Player;

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.sprite = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'yeoman');
        this.sprite.inputEnabled = true;

        this.game.physics.arcade.enable(this.sprite);

        this.sprite.events.onInputDown.add(this.clickListener, this);

        this.player = new Player(this.game, 50, 50);

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

    clickListener() {
        this.game.onPause.dispose();
        this.game.onResume.dispose();
        this.game.state.start('gameover');
    }
}