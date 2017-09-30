import { Node } from '../lib/index'

class ResponserNode extends Node {
    constructor () {
        super();
        this.addReceiver('request', Object, this.onHttpRequestReceived.bind(this))
    }
    onHttpRequestReceived (data) {
        const { response, request } = data;
        response.end(request.url)
    }
}

export default ResponserNode