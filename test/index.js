import Scenario from '../lib/index'

import HttpServerNode from "./HttpServerNode";
import ResponderNode from "./ResponderNode";
import LogHttpRequestNode from "./LogHttpRequestNode";
import TimerNode from "./TimerNode";

const scenario = new Scenario();

const startTimer = scenario.register(new TimerNode({ timeout: 3000, debug: true }));
const serverDelay = scenario.register(new TimerNode({ timeout: 2000 }));
const server = scenario.register(new HttpServerNode({ port: 3000 }));
const responder = scenario.register(new ResponderNode());
const logger = scenario.register(new LogHttpRequestNode());

scenario.connect({ node: startTimer, broadcaster: 'next' }, { node: server, receiver: 'control'});
scenario.connect({ node: server, broadcaster: 'request' }, { node: serverDelay, receiver: 'pass'});
scenario.connect({ node: server, broadcaster: 'pathname' }, { node: logger, receiver: 'pathname'});
scenario.connect({ node: serverDelay, broadcaster: 'pass' }, { node: responder, receiver: 'request'});

scenario.flag(startTimer)

scenario.start();

/*
timer.broadcasters.next.connectTo(server.receivers.control);
server.broadcasters.request.connectTo(serverDelay.receivers.pass);
serverDelay.broadcasters.pass.connectTo(responder.receivers.request);
server.broadcasters.pathname.connectTo(logger.receivers.pathname);

scenario.start(timer); */