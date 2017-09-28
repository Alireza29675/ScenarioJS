import { Node } from '../lib/index.js'
import http from 'http'

class HttpServerNode extends Node {
    constructor (props) {
        super({}, props);
        this.addBroadcaster({ name: 'request', type: Object });
        this.onReady();
    }
    onReady () {
        http.createServer(this._onHttpRequest.bind(this)).listen(this.props.port || 3000);
    }
    _onHttpRequest (req, res) {
        this.getBroadcaster('request').broadcast({ request: req, response: res });
    }
}

export default HttpServerNode