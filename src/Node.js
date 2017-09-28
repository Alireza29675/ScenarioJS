import { isValid, any } from 'shapely'
import Receiver from "./Receiver";
import Broadcaster from "./Broadcaster";

const defaultNodeOptions = {
    name: 'no-name',
    label: 'No Name Node!',
    script: '',
    position: [0, 0]
};
const defaultProperties = {

};

class Node {
    constructor (options = {}, props = {}) {
        // Default options for every node
        this.options = Object.assign({}, defaultNodeOptions, options);
        this.receivers = [];
        this.broadcasters = [];
        this.props = Object.assign({}, defaultProperties, props);
        this.name = this.options.name;
        this.label = this.options.label;
        this.script = this.options.script;
    }

    // Adding or Removing Channels
    addReceiver (options = {name: '', type: any}) {
        this.receivers.push(new Receiver(this, options.name, options.type))
    }
    addBroadcaster (options = {name: '', type: any}) {
        this.broadcasters.push(new Broadcaster(this, options.name, options.type))
    }
    addProperty (options = {type: any, name: 'Unnamed'}) {
        this.props[options.name] = {
            name: options.name,
            type: options.type
        }
    }
    getBroadcaster (name) {
        for (let broadcaster of this.broadcasters) if (broadcaster.name === name) return broadcaster;
        return null;
    }
    getReceiver (name) {
        for (let receiver of this.receivers) if (receiver.name === name) return receiver;
        return null;
    }

    // Positioning getters and setters
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

    // Behaviours
    receive (receiverName, data) {
        const receiver = this.getReceiver(receiverName);
        receiver.receive(data);
    }
    broadcast (broadcasterName, data) {
        const broadcaster = this.getBroadcaster(broadcasterName);
        broadcaster.broadcast(data);
    }

    // Events Listeners
    onReady () {}
    onReceive (receiver, data) {}
    onBroadcast (broadcaster, data) {}
    onMove (position) {}
}

export default Node