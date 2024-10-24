import {useEffect,useState} from 'react';
import mqtt from 'mqtt';

export const useMqtt = (brokerUrl,topic) => {
    const [message,setMessage] = useState(null);

    useEffect(() => {
        const client = mqtt.connect(brokerUrl);

        client.on('connect', () => {
            console.log("connected to mqtt broker.");
            client.subscribe(topic,(err) => {
                if(err){
                    console.log("Subcription error: ",err);
                }
            });
        });

        client.on('message',(topic,payload) => {
            const newMessage = payload.toString();
            console.log(`Recieved message on ${topic}: ${newMessage}`);
            setMessage("newMessage");
        });

        return () => {
            client.end();
        };

    },[brokerUrl,topic]);
    
    return message;
};