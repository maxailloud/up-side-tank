/// <reference path="BehaviorInterface.ts" />

class Behaviorable {

    behaviors: BehaviorInterface[];

    constructor() {
        this.behaviors = [];
    }

    addBehavior(bahevior) {
        this.behaviors[bahevior.name] = bahevior;
        this.behaviors[bahevior.name].setTarget(this);
        return bahevior;
    }

    getBehavior(behaviorName: string) {
        return this.behaviors[behaviorName];
    }

    update(): void {
        Object.keys(this.behaviors).forEach(function (element, index, array) {
            this.behaviors[element].update();
        }, this);
    }
}