class Boot extends Phaser.State {

    preload() {
        this.load.image('loading', 'assets/images/loading.png');
        this.load.image('load_progress_bar', 'assets/images/progress_bar_bg.png');
        this.load.image('load_progress_bar_dark', 'assets/images/progress_bar_fg.png');
    }

    create() {
        this.input.maxPointers = 1;

        this.stage.disableVisibilityChange = false;

        if (this.game.device.desktop) {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
            //this.scale.pageAlignVertically = true;
            //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
        else {
            //  Same goes for mobile settings.
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
            this.scale.refresh();
        }

        this.game.state.start('preload', true, false);
    }
}