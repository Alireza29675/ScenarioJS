import { Node } from '../lib/index'

class LogHttpRequestNode extends Node {
    constructor () {
        super();
        this.addReceiver('request', Object, this.onHttpRequestReceived.bind(this));
    }
    onHttpRequestReceived (data) {
        console.log('New page requested');
        console.log(data.params)
    }
}

export default LogHttpRequestNode