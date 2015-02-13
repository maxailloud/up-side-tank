/// <reference path="BehaviorInterface.ts" />

class BaseBehavior implements BehaviorInterface {
    name: string = null;
    target:Behaviorable = null;

    setTarget(target) {
        this.target = target;
        console.log('[' + this.name + '] :: added target ' + target);
    }

    behave() {
    }
}