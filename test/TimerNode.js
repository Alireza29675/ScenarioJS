import { Node, any } from '../lib/index'
import { stdout as log } from 'single-line-log';
import chalk from 'chalk'

const space = {
    free: '░',
    filled: '█'
};

const countTo = (to, time) => {
    const diff = to - Date.now();
    const percent = diff / time * 100;
    let progress = '';
    for (let i = 20; i > 0; i--) progress += percent > i * 5 ? space.free : space.filled;
    log(chalk`\n    {yellowBright Waiting For Timer:} ${progress} Remaining: ${diff >= time/100 ? diff : 0}ms/${time}ms\n`);
    if (diff >= time/100) setTimeout(() => { countTo(to, time) }, time/1000)
};

const countDown = (time) => {
    countTo(Date.now() + time, time);
};


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
        if (this.props.debug) countDown(this.props.timeout);
        setTimeout(this.sendPulse.bind(this), this.props.timeout)
    }
    sendPulse () {
        this.timesFired++;
        if (this.props.togglePulse) this.pulse = !this.pulse;
        this.broadcasters.next.broadcast(this.pulse);
        if (this.timesFired < this.props.repeat) setTimeout(this.sendPulse.bind(this), this.props.timeout)
    }
    passData (data) {
        if (this.props.debug) countDown(this.props.timeout);
        setTimeout(() => { this.broadcasters.pass.broadcast(data) }, this.props.timeout)
    }
}

export default TimerNode