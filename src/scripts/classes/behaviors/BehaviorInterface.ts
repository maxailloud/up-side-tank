/// <reference path="Behaviorable.ts" />

interface BehaviorInterface {

    target: Behaviorable;

    setTarget(target) : void;
    behave() : void;
}