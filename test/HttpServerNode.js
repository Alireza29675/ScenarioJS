import { Node } from '../lib/index.js'
import http from 'http'

class HttpServerNode extends Node {
    constructor (props) {
        super({}, props);
        this.props.port = this.props.port || 3000;
        this.addBroadcaster('request', Object);
    }
    init () {
        http.createServer(this.onHttpRequest.bind(this)).listen(this.props.port);
        console.log(`Server is running on http://localhost:${this.props.port}/`)
    }
    onHttpRequest (req, res) {
        this.broadcasters.request.broadcast({ request: req, response: res });
    }
}

export default HttpServerNode