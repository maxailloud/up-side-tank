class Gameover extends Phaser.State {

    titleText: Phaser.Text;
    congratsText: Phaser.Text;
    instructionText: Phaser.Text;

    create() {
        var style = {font: '65px Arial', fill: '#ffffff', align: 'center'};
        this.titleText = this.game.add.text(this.game.world.centerX, 100, 'Game Over!', style);
        this.titleText.anchor.set(0.5, 0.5);
        this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', {
            font: '32px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        this.congratsText.anchor.set(0.5, 0.5);
        this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', {
            font: '16px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        this.instructionText.anchor.set(0.5, 0.5);
    }

    update() {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('play');
        }
    }
}