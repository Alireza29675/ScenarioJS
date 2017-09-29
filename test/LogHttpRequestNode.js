import { Node } from '../lib/index'

class LogHttpRequestNode extends Node {
    constructor () {
        super();
        this.addReceiver('request', Object, this.onHttpRequestReceived.bind(this));
    }
    onHttpRequestReceived (data) {
        console.log('New Request');
        console.log(data.body)
    }
}

export default LogHttpRequestNode