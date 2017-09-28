import { Node } from '../lib/index'

class ResponserNode extends Node {
    constructor () {
        super();
        this.addReceiver({ name: 'request', type: Object })
    }
    onReceive (receiver, data) {
        if (receiver.name === 'request') this._onHttpRequestReceived(data)
    }
    _onHttpRequestReceived (data) {
        data.response.end('get schwifty!');
    }
}

export default ResponserNode