import { Node } from '../lib/index'

class ResponserNode extends Node {
    constructor () {
        super();
        this.addReceiver('request', Object, this.onHttpRequestReceived.bind(this))
    }
    onHttpRequestReceived (data) {
        data.response.end('get schwifty!');
    }
}

export default ResponserNode