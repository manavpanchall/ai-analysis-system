const WebSocket = require('ws');
const { analyzeResponse } = require('./analysis');
const cache = require('./cache/cache');

// Connect to WebSocket server
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to the WebSocket server');
});

ws.on('message', async (data) => {
    const { prompt } = JSON.parse(data);
    console.log(`Received prompt: ${prompt}`);

    // Simulated user response
    const userResponse = "Deep learning is a subset of machine learning focused on neural networks.";
    console.log(`User response: ${userResponse}`);

    // Check cache for existing analysis
    if (cache.has(userResponse)) {
        console.log('Cached result:', cache.get(userResponse));
        return;
    }

    // Analyze the response
    const feedback = analyzeResponse(userResponse);
    cache.set(userResponse, feedback); // Cache the feedback

    console.log('Feedback:', feedback);

    // Send feedback to the server
    ws.send(JSON.stringify({ prompt, feedback }));
});

ws.on('close', () => {
    console.log('Disconnected from the server');
});
