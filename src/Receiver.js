class Receiver {
    /**
     * Receiver constructor
     * @param node
     * @param name
     * @param type
     */
    constructor (node, name, type) {
        this.node = node;
        this.name = name;
        this.type = type;
        this.listeners = []
    }

    /**
     * Receives a data, calls listeners then fires the onReceive method
     * @param data
     */
    receive (data) {
        for (let listener of this.listeners) if (listener) listener();
        this.node.onReceive(this, data)
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