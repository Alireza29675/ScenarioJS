import Node from './Node'
import { isValid, any, union } from 'shapely'

class Scenario {

    /**
     * starts a node
     * @param node
     */
    start (node) {
        node.receivers.control.receive(true);
    }

}

export { Node, any, union };
export default Scenario;