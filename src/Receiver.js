class Receiver {
    constructor (node, name, type) {
        this.node = node;
        this.name = name;
        this.type = type;
    }
    receive (data) {
        this.node.onReceive(this, data)
    }
}

export default Receiver