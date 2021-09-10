import { makeObservable, observable, action, computed } from "mobx";

export function countStore () {
    return makeObservable({
        counter: 0,
        dec() {
            this.counter -= 1;
        },
        inc() {
            this.counter++;
        }
    }, {
        counter: observable,
        dec: action.bound,
        inc: action.bound
    })
}