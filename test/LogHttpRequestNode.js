import { Node } from '../lib/index'

class LogHttpRequestNode extends Node {
    constructor () {
        super();
        this.addReceiver('request', Object, this.onHttpRequestReceived.bind(this));
    }
    onHttpRequestReceived (data) {
        const req = data.request;
        console.log(`new HTTP Request: ${req.url}`);
    }
}

export default LogHttpRequestNode