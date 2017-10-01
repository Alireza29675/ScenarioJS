import { Node, chalk } from '../lib/index'

class LogHttpRequestNode extends Node {
    constructor () {
        super();
        this.addReceiver('pathname', String, this.onPathnameReceived.bind(this));
    }
    onPathnameReceived (pathname) {
        this.log(chalk`{bgCyanBright.black  GET } {cyanBright new request from:} ${pathname}`);
    }
}

export default LogHttpRequestNode