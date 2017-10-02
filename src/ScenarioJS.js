import Node from './Node'
import Report from './tools/Report'
import { generateUID } from "./tools/UIDManager"
import { any } from './tools/TypeValidator'
import chalk from 'chalk'

class Scenario {

    /**
     * Scenario constructor
     */
    constructor () {
        this.flagNodes = [];
        this.nodes = {};
    }

    /**
     * registers a node and add it to scenario flow
     * @param {Node} node
     */
    register (node) {
        if (!this.hasNode(node)) {
            const uid = generateUID();
            node.uid = uid;
            this.nodes[uid] = node;
        }
    }

    /**
     * check if scenario registered a node before!
     * @param node
     * @return {boolean}
     */
    hasNode (node) {
        for (let uid in this.nodes) if (this.nodes[uid] === node) return true;
        return false;
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

export { Node, Report, any, chalk };
export default Scenario;