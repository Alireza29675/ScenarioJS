import Report from "./tools/Report";
import { checkValid } from "./tools/TypeValidator";

class Receiver {
    /**
     * Receiver constructor
     * @param node
     * @param name
     * @param type
     * @param callback
     */
    constructor (node, name, type, callback) {
        this.node = node;
        this.name = name;
        this.type = type;
        this.listeners = [];
        if (callback) this.addListener(callback);
    }

    /**
     * Receives a data, calls listeners then fires the onReceive method
     * @param data
     * @return {Receiver|Report}
     */
    receive (data) {
        // Checking type validation
        if (!checkValid(this.type, data))
            return new Report({ type: 'error',  message: `received data is not valid! expected ${this.type}` });

        // Calling all listeners
        for (let listener of this.listeners) if (listener) listener(data);

        // Firing onReceive method of parent node
        this.node.onReceive(this, data);

        return this
    }

    /**
     * Adding new listeners to this receiver
     * @param callback
     * @returns {number}: index of new listener
     */
    addListener (callback) {
        if (!this.listeners.includes(callback)) this.listeners.push(callback);
        return this.listeners.length - 1
    }

    /**
     * Removing a listener by it's index
     * @param index
     */
    removeListener (index) {
        this.listeners[index] = null
    }
}

export default Receiver