const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Predefined prompts
const prompts = [
    "Explain the concept of neural networks.",
    "What is supervised learning?",
    "Describe reinforcement learning with an example.",
    "What are generative adversarial networks (GANs)?"
];

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send a prompt every 5 seconds
    const sendPrompt = () => {
        const prompt = prompts[Math.floor(Math.random() * prompts.length)];
        ws.send(JSON.stringify({ prompt }));
    };

    const interval = setInterval(sendPrompt, 5000);

    ws.on('message', (message) => {
        console.log('Received feedback from client:', message);
    });

    ws.on('close', () => {
        clearInterval(interval);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server running at ws://localhost:8080');
