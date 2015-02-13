/// <reference path="MenuButtons.ts" />

class MenuArrow {

    game: Phaser.Game;
    arrow: Phaser.Image;
    arrowMoveDelay: number = 200;
    arrowCanMove: boolean = true;
    arrowCurrentButton: number = 1;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    init() {
        this.arrow = this.game.add.image(this.game.world.centerX - 100, this.game.world.centerY - 50, 'menu_arrow');
        this.arrow.anchor.setTo(0.5, 0.5);
        this.arrowCurrentButton = 1;
        this.game.add.tween(this.arrow)
            .to({
                x: this.arrow.x - 10
            }, 700, Phaser.Easing.Quadratic.Out)
            .to({
                x: this.arrow.x
            }, 400, Phaser.Easing.Quadratic.In)
            .loop()
            .start();
    }

    move (cursors: Phaser.CursorKeys, buttons: MenuButtons) {
        if (cursors.down.isDown && this.arrowCanMove) {
            this.arrowCanMove = false;
            this.delayNextMovement();
            switch(this.arrowCurrentButton) {
                case 1:
                    this.changeSelection(buttons, 2);
                    break;
                case 2:
                    this.changeSelection(buttons, 3);
                    break;
                default:
                    this.changeSelection(buttons, 1);
            }
        }
        if (cursors.up.isDown && this.arrowCanMove) {
            this.arrowCanMove = false;
            this.delayNextMovement();
            switch(this.arrowCurrentButton) {
                case 1:
                    this.changeSelection(buttons, 3);
                    break;
                case 2:
                    this.changeSelection(buttons, 1);
                    break;
                default:
                    this.changeSelection(buttons, 2);
            }
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
            this.activateButton(buttons, this.arrowCurrentButton);
        }
    }

    changeSelection (buttons: MenuButtons, buttonNum: number) {
        this.game.add.tween(this.arrow)
            .to(
            {y: this.game.world.centerY + buttons.position[buttonNum - 1]},
            this.arrowMoveDelay, Phaser.Easing.Quadratic.In
        )
            .start();
        this.arrowCurrentButton = buttonNum;
    }

    delayNextMovement () {
        this.game.time.events.add(255, (function() {
            this.arrowCanMove = true;
        }), this);
    }

    activateButton (buttons: MenuButtons, currentButton: number) {
        buttons[buttons.callbacks[currentButton - 1]]();
    }
}