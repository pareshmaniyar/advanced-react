import React from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3000";

class WebSocket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: "Initial Number",
            status: ""
        };
        console.log("Woaa!!");
        let ws = socketIOClient(ENDPOINT);
        ws.on('FromAPI', (data) => {
            this.setState({ number: data});
            console.log("data:", data);
        });
    }
    render(){
        return (
            <div>
                <h2>WebSocket</h2>
                {this.state.number}
            </div>
        );
    }
}

export default WebSocket;