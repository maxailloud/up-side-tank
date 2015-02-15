/// <reference path="BehaviorInterface.ts" />

class BaseBehavior implements BehaviorInterface {
    name: string = null;
    target:Behaviorable = null;

    setTarget(target) {
        this.target = target;
    }

    behave() {
    }
}