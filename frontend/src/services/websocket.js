import SockJS from "sockjs-client";
import Stomp from "stompjs";

const socket = new SockJS(
    "http://localhost:8084/ws"
);

const stompClient = Stomp.over(socket);

export default stompClient;