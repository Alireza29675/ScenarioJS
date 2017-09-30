import { Node, any } from '../lib/index'

class TimerNode extends Node {
    constructor (props) {
        super({ shouldPass: false }, props);
        this.addBroadcaster('pass', any);
        this.addReceiver('pass', any, this.passData.bind(this));
        this.props.timeout = this.props.timeout || 1000;
        this.props.repeat = this.props.repeat || 1;
        this.props.togglePulse = this.props.togglePulse || false;
        this.timesFired = 0;
        this.pulse = true;
    }
    init () {
        setTimeout(this.sendPulse.bind(this), this.props.timeout)
    }
    sendPulse () {
        this.timesFired++;
        if (this.props.togglePulse) this.pulse = !this.pulse;
        this.broadcasters.next.broadcast(this.pulse);
        if (this.timesFired < this.props.repeat) setTimeout(this.sendPulse.bind(this), this.props.timeout)
    }
    passData (data) {
        setTimeout(() => { this.broadcasters.pass.broadcast(data) }, this.props.timeout)
    }
}

export default TimerNode