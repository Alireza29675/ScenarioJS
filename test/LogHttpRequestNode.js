import { Node } from '../lib/index'

class LogHttpRequestNode extends Node {
    constructor () {
        super();
        this.addReceiver({ name: 'request', type: Object })
    }
    onReceive (receiver, data) {
        if (receiver.name === 'request') this._onHttpRequestReceived(data)
    }
    _onHttpRequestReceived (data) {
        console.log('New page requested')
        console.log(data)
    }
}

export default LogHttpRequestNode