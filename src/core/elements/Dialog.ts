import { Listener } from './Listener';
import { Emitter } from './Emitter';

export class Dialog {
    private emitters: Emitter[];
    private listeners: Listener[];

    constructor () {
        this.emitters = [];
        this.listeners = [];
    }
}