/// <reference path="../classes/MenuButtons.ts" />
/// <reference path="../classes/MenuArrow.ts" />

class MainMenu extends Phaser.State {

    background: Phaser.Sprite;
    logo: Phaser.Sprite;
    menuButtons: MenuButtons;
    menuArrow: MenuArrow;
    cursors: Phaser.CursorKeys;
    gameTitle: Phaser.Image;

    create() {
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.gameTitle = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 200, 'menu_title');
        this.gameTitle.anchor.setTo(0.5, 0.5);

        this.menuButtons = new MenuButtons(this.game);
        this.menuButtons.init();

        this.menuArrow = new MenuArrow(this.game);
        this.menuArrow.init();
    }

    update() {
        this.menuArrow.move(this.cursors, this.menuButtons);
    }
}