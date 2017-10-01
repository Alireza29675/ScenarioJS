import Scenario from '../lib/index'

import HttpServerNode from "./HttpServerNode";
import ResponderNode from "./ResponderNode";
import LogHttpRequestNode from "./LogHttpRequestNode";
import TimerNode from "./TimerNode";

const scenario = new Scenario();

scenario.register(new TimerNode({ timeout: 3000, debug: true }));
scenario.register(new TimerNode({ timeout: 2000 }));
scenario.register(new HttpServerNode({ port: 3000 }));
scenario.register(new ResponderNode());
scenario.register(new LogHttpRequestNode());



/*
timer.broadcasters.next.connectTo(server.receivers.control);
server.broadcasters.request.connectTo(serverDelay.receivers.pass);
serverDelay.broadcasters.pass.connectTo(responder.receivers.request);
server.broadcasters.pathname.connectTo(logger.receivers.pathname);

scenario.start(timer); */