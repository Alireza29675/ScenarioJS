import { Node } from '../lib/index.js'
import http from 'http'

class HttpServerNode extends Node {
    constructor (props) {
        super({}, props);
        this.addBroadcaster('request', Object);
        this.init()
    }
    init () {
        http.createServer(this.onHttpRequest.bind(this)).listen(this.props.port || 3000);
    }
    onHttpRequest (req, res) {
        this.broadcasters.request.broadcast({ request: req, response: res });
    }
}

export default HttpServerNode