import Node from './Node'
import { isValid, any, union } from 'shapely'

class Scenario {

    /**
     * Scenario constructor
     */
    constructor () {
        this.flagNodes = [];
    }

    /**
     * flags a node to start, when start method fired
     * @param node
     */
    flag (node) {
        this.flagNodes.push(node)
    }

    /**
     * starts a node
     * @param node
     */
    start (node) {
        // flags all nodes which got to start method
        for (let node of arguments) this.flag(node)

        // start all flag nodes
        for (let node of this.flagNodes) node.receivers.control.receive(true);
    }

}

export { Node, any, union };
export default Scenario;