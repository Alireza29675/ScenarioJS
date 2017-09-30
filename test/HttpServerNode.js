import { Node } from '../lib/index.js'
import http from 'http'
import url from 'url'

class HttpServerNode extends Node {
    constructor (props) {
        super({}, props);
        this.props.port = this.props.port || 3000;
        this.props.debug = this.props.debug || true;
        this.addBroadcaster('request', Object);
        this.addBroadcaster('pathname', String);
        this.addBroadcaster('query', String);
    }
    init () {
        http.createServer(this.onHttpRequest.bind(this)).listen(this.props.port);
        if (this.props.debug) console.log(`Server is running on http://localhost:${this.props.port}/`)
    }
    onHttpRequest (req, res) {
        if (this.props.debug) console.log(`new request from`);
        const parsedURL = url.parse(req.url);

        // Broadcasting Request and Response Object
        if (this.broadcasters.request.haveConnections) {
            this.broadcasters.request.broadcast({ request: req, response: res });
        }

        // Broadcasting URL
        if (this.broadcasters.pathname.haveConnections) {
            this.broadcasters.pathname.broadcast(parsedURL.pathname || '')
        }

        // Broadcasting Query
        if (this.broadcasters.query.haveConnections) {
            this.broadcasters.query.broadcast(parsedURL.query || '')
        }
    }
}

export default HttpServerNode