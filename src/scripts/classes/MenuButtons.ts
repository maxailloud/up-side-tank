class MenuButtons {

    game: Phaser.Game;
    position: number[] = [-50, 50, 150];
    callbacks: string[] = ['playState', 'playState', 'playState'];
    button1: Phaser.Button;
    button2: Phaser.Button;
    button3: Phaser.Button;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    init() {
        this.button1 = this.addButton(1, this.playState);
        this.button1.anchor.setTo(0.5, 0.5);

        this.button2 = this.addButton(2, this.playState);
        this.button2.anchor.setTo(0.5, 0.5);

        this.button3 = this.addButton(3, this.playState);
        this.button3.anchor.setTo(0.5, 0.5);
    }

    addButton(position: number, callback: () => void) {
        return this.game.add.button(this.game.world.centerX, this.game.world.centerY + this.position[position - 1], 'menu_button' + position, callback);
    }

    playState () {
        this.game.state.start('play');
    }
}