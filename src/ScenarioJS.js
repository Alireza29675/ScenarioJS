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
            return uid;
        }
        return null;
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
     * connects a receiver to a broadcaster
     * @param beginPoint
     * @param endPoints
     */
    connect (beginPoint = { node: null, broadcaster: '' }, ...endPoints) {

        // Convert uid code to real nodes if needed
        beginPoint.node = this.getNode(beginPoint.node);

        // connecting
        for (let endPoint of endPoints) {
            endPoint.node = this.getNode(endPoint.node);
            beginPoint.node.broadcasters[beginPoint.broadcaster].connectTo(endPoint.node.receivers[endPoint.receiver])
        }
    }

    /**
     * Finds and returns the node using uid
     * @param uid
     * @return {Node}
     */
    getNode (uid) {
        if (uid instanceof Node) return uid;
        return this.nodes[uid]
    }

    /**
     * flags a node to start, when start method fired
     * @param node
     * @return {Scenario}
     */
    flag (node) {
        node = this.getNode(node);
        this.flagNodes.push(node);
        return this;
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