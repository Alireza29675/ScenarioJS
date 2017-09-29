import HttpServerNode from "./HttpServerNode";
import ResponderNode from "./ResponderNode";
import LogHttpRequestNode from "./LogHttpRequestNode";

const server = new HttpServerNode({ port: 3000 });
const responder = new ResponderNode();
const logger = new LogHttpRequestNode();

server.broadcasters.request.connectTo(responder.receivers.request);
server.broadcasters.request.connectTo(logger.receivers.request);