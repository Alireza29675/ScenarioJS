import Scenario from '../lib/index'

import HttpServerNode from "./HttpServerNode";
import ResponderNode from "./ResponderNode";
import LogHttpRequestNode from "./LogHttpRequestNode";
import TimerNode from "./TimerNode";

const scenario = new Scenario();

const getBroadcaster = (nodeIndex, name) => { return { node: registeredNodes[nodeIndex], broadcaster: name } };
const getReceiver = (nodeIndex, name) => { return { node: registeredNodes[nodeIndex], receiver: name } };

const registeredNodes = [
    /* 0 */  scenario.register(new TimerNode({ timeout: 3000, debug: true })),
    /* 1 */  scenario.register(new TimerNode({ timeout: 2000 })),
    /* 2 */  scenario.register(new HttpServerNode({ port: 3000 })),
    /* 3 */  scenario.register(new ResponderNode()),
    /* 4 */  scenario.register(new LogHttpRequestNode())
];

scenario.connect(getBroadcaster(0, 'next'), getReceiver(2, 'control'));
scenario.connect(getBroadcaster(2, 'request'), getReceiver(1, 'pass'));
scenario.connect(getBroadcaster(2, 'pathname'), getReceiver(4, 'pathname'));
scenario.connect(getBroadcaster(1, 'pass'), getReceiver(3, 'request'));

scenario.flag(startTimer);

scenario.start();