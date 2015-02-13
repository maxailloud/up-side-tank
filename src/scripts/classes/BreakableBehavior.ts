/// <reference path="behaviors/BaseBehavior.ts" />

class BreakableBehavior extends BaseBehavior {

    name: string = "Breakable";

    isBroken: boolean = false;
    healthPoints: number = 100;

    onBroken: Phaser.Signal = new Phaser.Signal();

    hurt(damage: number): void {
        if (this.isBroken) {
            return;
        }
        this.healthPoints -= damage;
        console.log("[Breakable] :: hit for " + damage + " points. " + this.healthPoints + " points remaining.");
        if (this.healthPoints <= 0) {
            this.isBroken = true;
            this.break();
        }
    }

    behave(): void {
        this.break();
    }

    break(): void {
        console.log("[Breakable] :: break");
        this.onBroken.dispatch();
    }

    update(): void {
        // console.log("[Breakable] :: update");
    }
}