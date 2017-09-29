import {any} from './tools/TypeValidator'
import Receiver from "./Receiver";
import Broadcaster from "./Broadcaster";
import Report from "./tools/Report";

const defaultNodeOptions = {
    name: 'no-name',
    label: 'No Name Node!',
    script: '',
    position: [0, 0]
};
const defaultProperties = {

};

class Node {
    /**
     * Node constructor
     * @param options
     * @param props
     */
    constructor (options = {}, props = {}) {
        // Default options for every node
        this.options = Object.assign({}, defaultNodeOptions, options);
        this.receivers = {};
        this.broadcasters = {};
        this.props = Object.assign({}, defaultProperties, props);
        this.name = this.options.name;
        this.label = this.options.label;
        this.script = this.options.script;
    }

    /**
     * Adding Receiver
     * @param name
     * @param type
     * @param callback
     * @returns {Receiver|Report}
     */
    addReceiver (name, type = any, callback) {
        // Validation and Catch errors
        if (!name)
            return new Report({ type: 'error', message: 'Receiver must have a name!' });

        if (this.receivers[name])
            return new Report({ type: 'error', message: 'Receiver must have a name!' });

        // Add Receiver
        return this.receivers[name] = new Receiver(this, name, type, callback)
    }

    /**
     * Adding Broadcaster
     * @param name
     * @param type
     * @returns {Broadcaster|Report}
     */
    addBroadcaster (name, type = any) {
        // Validation and Catch errors
        if (!name)
            return new Report({ type: 'error', message: 'Broadcaster must have a name!' });

        if (this.broadcasters[name])
            return new Report({ type: 'error', message: 'Broadcaster must have a name!' });

        // Add Receiver
        return this.broadcasters[name] = new Broadcaster(this, name, type)
    }

    /**
     * Adding Property
     * @param options
     */
    addProperty (options = {type: any}) {
        this.props[options.name] = {
            name: options.name,
            type: options.type
        }
    }

    /**
     * Returns all receivers as an array
     * @returns {Array}
     */
    getAllReceivers () {
        const allReceivers = [];
        for (let name of this.receivers) allReceivers.push(name);
        return allReceivers;
    }

    /**
     * Returns all broadcasters as an array
     * @returns {Array}
     */
    getAllBroadcasters () {
        const allBroadcasters = [];
        for (let name of this.broadcasters) allBroadcasters.push(name);
        return allBroadcasters;
    }


    /**
     * Positioning Getters and Setters
     */
    get x () { return this.options.position[0]; }
    set x (to) {
        this.options.position[0] = to;
        this.onMove(this.options.position)
    }
    get y () { return this.options.position[1]; }
    set y (to) {
        this.options.position[1] = to;
        this.onMove(this.options.position)
    }

    /**
     * Receive data and pass it to a receiver
     * @param receiverName
     * @param data
     */
    receive (receiverName, data) {
        const receiver = this.receivers[receiverName];
        receiver.receive(data);
    }

    /**
     * Receive data and pass it to a receiver
     * @param broadcasterName
     * @param data
     */
    broadcast (broadcasterName, data) {
        const broadcaster = this.broadcasters[broadcasterName];
        broadcaster.broadcast(data);
    }

    // Events Listeners
    onReady () {}
    onReceive (receiver, data) {}
    onBroadcast (broadcaster, data) {}
    onMove (position) {}

    /**
     * Append a listener to a receiver
     * @param receiverName
     * @param cb
     * @returns {Receiver|Report}
     */
    on (receiverName, cb) {
        const receiver = this.receivers[receiverName];
        if (!receiver) return new Report({
            type: 'error',
            message: `There is no receiver named ${receiverName}! Check it out again`
        });
        receiver.addListener(cb);
        return receiver
    }
}

export default Node