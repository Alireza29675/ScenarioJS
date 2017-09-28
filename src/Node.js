import { isValid, any } from 'shapely'

const defaultNodeOptions = {
    name: 'no-name',
    label: 'No Name Node!',
    script: '',
    position: [0, 0]
};
const defaultReceiverOptions = {

};
const defaultBroadcasterOptions = {

};
const defaultProperties = {

};

class Node {
    constructor (options = {}, props = {}) {
        // Default options for every node
        this.options = Object.assign({}, defaultNodeOptions, options);
        this.channels = {
            receivers: [],
            broadcasters: []
        };
        this.props = Object.assign({}, defaultProperties, props);
        this.name = this.options.name;
        this.label = this.options.label;
        this.script = this.options.script;
    }

    // Adding or Removing Channels
    addReceiver (options = {type: any, name: ''}) {
        const receiverOptions = Object.assign({ isChannel: true, isReceiver: true }, defaultReceiverOptions, options);
        this.channels.receivers.push(receiverOptions)
    }
    addBroadcaster (options = {type: any, name: ''}) {
        const broadcasterOptions = Object.assign({ isChannel: true, isBroadcaster: true }, defaultBroadcasterOptions, options);
        this.channels.broadcasters.push(broadcasterOptions)
    }
    addProperty (options = {type: any, name: 'Unnamed'}) {
        this.props[options.name] = {
            name: options.name,
            type: options.type
        }
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
    receive (channel, data) {
        this.onReceive(channel, data)
    }
    broadcast (channel, data) {
        this.onBroadcast(channel, data)
    }

    // Events Listeners
    onReady () {}
    onReceive (channel, data) {}
    onBroadcast (channel, data) {}
    onMove (position) {}
}

export default Node