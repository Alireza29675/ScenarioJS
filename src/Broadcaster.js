import Receiver from "./Receiver";
import { isValid } from 'shapely'
import Report from "./tools/Report";

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
        // Checking type validation
        if (!isValid(this.type, data))
            return new Report({ type: 'error',  message: `data is not valid! expected ${this.type}` });

        // Broadcasting to all connected receivers
        for (let receiver of this.connections) {
            receiver.receive(data)
        }

        // Firing onBroadcast method of parent node
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