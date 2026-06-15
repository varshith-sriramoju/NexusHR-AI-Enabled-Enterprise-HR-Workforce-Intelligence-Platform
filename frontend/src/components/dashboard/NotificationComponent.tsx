import { useEffect, useState } from "react";
import stompClient from "../../services/websocket";

type Notification = {
    message: string;
};

function NotificationComponent() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        console.log("Notification Component Loaded");
        stompClient.connect({}, () => {
            stompClient.subscribe("/topic/notifications/1", (message) => {
                const data: Notification = JSON.parse(message.body);

                setNotifications((prev) => [...prev, data]);
            });
        });
    }, []);

    return (
        <div>
            <h2>Notifications</h2>

            {notifications.map((n, index) => (
                <p key={index}>{n.message}</p>
            ))}
        </div>
    );
}

export default NotificationComponent;