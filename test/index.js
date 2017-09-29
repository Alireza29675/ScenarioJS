import Scenario from '../lib/index'

import HttpServerNode from "./HttpServerNode";
import ResponderNode from "./ResponderNode";
import LogHttpRequestNode from "./LogHttpRequestNode";
import TimerNode from "./TimerNode";

const scenario = new Scenario();

const timer = new TimerNode({ timeout: 3000 });
const serverDelay = new TimerNode({ timeout: 5000 });
const server = new HttpServerNode({ port: 3000 });
const responder = new ResponderNode();
const logger = new LogHttpRequestNode();

timer.broadcasters.next.connectTo(server.receivers.control);
server.broadcasters.request.connectTo(serverDelay.receivers.pass);
server.broadcasters.request.connectTo(logger.receivers.request);
serverDelay.broadcasters.pass.connectTo(responder.receivers.request);

scenario.start(timer);