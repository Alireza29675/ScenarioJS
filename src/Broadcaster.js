import Receiver from "./Receiver";
import Report from "./tools/Report";
import { checkValid, any } from "./tools/TypeValidator";

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
     * @return {Broadcaster|Report}
     */
    broadcast (data) {
        // Checking type validation
        if (!checkValid(this.type, data))
            return new Report({ type: 'error',  message: `broadcast data is not valid! expected ${this.type}` });

        // Broadcasting to all connected receivers
        for (let receiver of this.connections) {
            receiver.receive(data)
        }

        // Firing onBroadcast method of parent node
        this.node.onBroadcast(this, data);

        return this
    }

    /**
     * Connects broadcaster to a receiver
     * @param receiver
     * @return {Broadcaster|Report}
     */
    connectTo (receiver) {
        const oneOfThoseHaveAnyType = (this.type === any) || (receiver.type === any);
        // Validating data types between broadcaster and receiver
        if (this.type !== receiver.type && !oneOfThoseHaveAnyType) {
            return new Report({
                type: 'error',
                message: `Type of broadcaster and receiver doesn't match! ${this.type} X ${receiver.type}`
            })
        }

        // checking existing connections and connect the new one
        if (receiver instanceof Receiver && !this.connections.includes(receiver)) {
            this.connections.push(receiver)
        }

        return this
    }

    /**
     * Returns true if broadcaster have connections
     * @return {boolean}
     */
    get haveConnections () {
        return this.connections.length > 0
    }
}

export default Broadcaster