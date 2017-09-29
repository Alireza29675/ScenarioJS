import Receiver from "./Receiver";
import { isValid } from 'shapely'

class Broadcaster {
    /**
     * Broadcaster constructor
     * @param node
     * @param name
     * @param type
     */
    constructor (node, name, type) {
        this.node = node;
        this.name = name;
        this.type = type;
        this.connections = []
    }

    /**
     * Broadcasts a message to all connected receivers
     * @param data
     */
    broadcast (data) {
        for (let receiver of this.connections) {
            receiver.receive(data)
        }
        this.node.onBroadcast(this, data)
    }

    /**
     * Connects broadcaster to a receiver
     * @param receiver
     */
    connectTo (receiver) {
        if (receiver instanceof Receiver && !this.connections.includes(receiver)) {
            this.connections.push(receiver)
        }
    }
}

export default Broadcaster