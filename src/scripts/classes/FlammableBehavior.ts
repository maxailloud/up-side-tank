/// <reference path="behaviors/BaseBehavior.ts" />

class FlammableBehavior extends BaseBehavior {

    name: string = "Flammable";

    isBurning: boolean = false;
    isBurnt: boolean = false;
    burnPoints: number = 1000;

    onBurnt: Phaser.Signal = new Phaser.Signal();

    burn() {
        if (this.isBurnt) {
            return;
        }
        this.isBurning = true;
        this.burnPoints--;
        console.log("[Flammable] :: burn (" + this.burnPoints + ")");
        if (this.burnPoints <= 0) {
            this.burnt();
        }
    }

    behave() {
        this.burn();
    }

    burnt() {
        this.isBurning = false;
        this.isBurnt = true;
        console.log("[Flammable] :: burnt");
        this.onBurnt.dispatch();
    }

    update() {
        // console.log("[Flammable] :: update");
        if (this.isBurning) {
            this.burn();
        }
    }
}