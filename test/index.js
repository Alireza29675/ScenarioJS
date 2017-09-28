import Scenario from '../lib/index.js'
import HttpServerNode from './HttpServerNode'
import ResponserNode from "./ResponserNode";

const server = new HttpServerNode({ port: 8080 });
const responser = new ResponserNode();

server.getBroadcaster('request').connectTo(responser.getReceiver('request'))