class Preload extends Phaser.State {

    loading: Phaser.Sprite;
    progressBar: Phaser.Sprite;
    progressBarDark: Phaser.Sprite;
    ready: boolean = false;

    preload() {
        this.loading = this.game.add.sprite(this.world.centerX, this.world.centerY - 20, 'loading');
        this.loading.anchor.setTo(0.5, 0.5);
        this.progressBar = this.game.add.sprite(this.world.centerX, this.world.centerY + 40, 'load_progress_bar');
        this.progressBar.anchor.setTo(0.5, 0.5);
        this.progressBarDark = this.game.add.sprite(this.world.centerX - 192, this.world.centerY + 40, 'load_progress_bar_dark');
        this.progressBarDark.anchor.setTo(0, 0.5);
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.game.load.setPreloadSprite(this.progressBarDark);

        this.load.image('menu_title', 'assets/images/menu_game_title.png');
        this.load.image('menu_arrow', 'assets/images/menu_arrow.png');
        this.load.image('menu_button1', 'assets/images/menu_button.png');
        this.load.image('menu_button2', 'assets/images/menu_button2.png');
        this.load.image('menu_button3', 'assets/images/menu_button3.png');
        this.load.atlasXML('tanks', 'assets/spritesheets/tanks.png', 'assets/spritesheets/tanks.xml');
    }

    update() {
        if (this.ready) {
            this.game.state.start('menu');
        }
    }

    onLoadComplete() {
        this.ready = true;
    }
}