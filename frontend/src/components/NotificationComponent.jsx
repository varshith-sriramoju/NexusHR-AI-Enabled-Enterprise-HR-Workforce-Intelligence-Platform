import { useEffect, useState } from "react";
import stompClient from "../services/websocket";

function NotificationComponent() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        stompClient.connect({}, () => {

            console.log("Connected");

            stompClient.subscribe(
                "/topic/notifications/1",
                (message) => {

                    const data =
                        JSON.parse(message.body);

                    console.log(data);

                    setNotifications(prev => [
                        ...prev,
                        data
                    ]);
                }
            );
        });

    }, []);

    return (
        <div>

            <h2>Notifications</h2>

            {
                notifications.map((n, index) => (
                    <p key={index}>
                        {n.message}
                    </p>
                ))
            }

        </div>
    );
}

export default NotificationComponent;