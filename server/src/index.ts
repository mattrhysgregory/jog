import * as WebSocket from 'ws';
import { RetroBoard, RetroMessageTypes, RetroMessage } from '../../types/';

const port = 8080;

export const initWebsockets = () => {

    console.log(`-- WS STARTED ON PORT ${port} --`)

    const board: RetroBoard = {
        [RetroMessageTypes.GOOD]: [],
        [RetroMessageTypes.BETTER]: [],
        [RetroMessageTypes.BAD]: [],
    };

    const wss = new WebSocket.Server({ port });

    const addToBoard = (m: RetroMessage) => board[m.type] = [...board[m.type], m];

    const isValidMessage = (m: RetroMessage): boolean => m.content && m.content.length > 0;

    wss.on('connection', (ws) => {

        console.log('-- CONNECTION MADE --');

        ws.on('message', (message) => {
            console.log('Message recieved: %s', message);

            const parsedMessage: RetroMessage = JSON.parse(message.toString());
            if (isValidMessage(parsedMessage)) {
                addToBoard(parsedMessage);
                ws.send(JSON.stringify(board));
            }
        });
    });
}

initWebsockets();