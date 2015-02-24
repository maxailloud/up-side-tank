/// <reference path="BehaviorInterface.ts" />

class Behaviorable {

    behaviors: BehaviorInterface[];

    constructor() {
        this.behaviors = [];
    }

    addBehavior(behavior) {
        this.behaviors[behavior.name] = behavior;
        this.behaviors[behavior.name].setTarget(this);
        return behavior;
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