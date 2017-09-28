import Receiver from "./Receiver";

class Broadcaster {
    constructor (node, name, type) {
        this.node = node;
        this.name = name;
        this.type = type;
        this.connections = []
    }
    broadcast (data) {
        for (let receiver of this.connections) {
            receiver.receive(data)
        }
        this.node.onBroadcast(this, data)
    }
    connectTo (receiver) {
        if (receiver instanceof Receiver) {
            this.connections.push(receiver)
        }
    }
}

export default Broadcaster