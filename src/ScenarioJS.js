import Node from './Node'
import { any } from './tools/TypeValidator'
import Report from './tools/Report'

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
     * starts all flag nodes
     * @param nodes
     */
    start (...nodes) {
        // flags all nodes which got to start method
        for (let node of nodes) this.flag(node)

        // start all flag nodes
        for (let node of this.flagNodes) node.receivers.control.receive(true);
    }

}

export { Node, Report, any };
export default Scenario;