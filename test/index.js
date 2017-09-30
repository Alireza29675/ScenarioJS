import Scenario from '../lib/index'

import HttpServerNode from "./HttpServerNode";
import ResponderNode from "./ResponderNode";
import LogHttpRequestNode from "./LogHttpRequestNode";
import TimerNode from "./TimerNode";

const scenario = new Scenario();

const timer = new TimerNode({ timeout: 10000 });
const server = new HttpServerNode({ port: 3000 });
const responder = new ResponderNode();
const logger = new LogHttpRequestNode();

timer.broadcasters.next.connectTo(server.receivers.control);
server.broadcasters.request.connectTo(responder.receivers.request);
server.broadcasters.pathname.connectTo(logger.receivers.request);

scenario.start(timer);