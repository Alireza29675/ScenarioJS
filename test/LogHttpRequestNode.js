import { Node } from '../lib/index'

class LogHttpRequestNode extends Node {
    constructor () {
        super();
        this.addReceiver('request', String, this.onHttpRequestReceived.bind(this));
    }
    onHttpRequestReceived (data) {
        console.log(data);
    }
}

export default LogHttpRequestNode