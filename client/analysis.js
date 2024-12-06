function analyzeResponse(response) {
    if (!response || response.trim() === '') {
        return { score: 0, feedback: 'Your response is empty. Please try again.' };
    }

    if (response.toLowerCase().includes('neural network')) {
        return {
            score: 10,
            feedback: 'Great job! You correctly identified the role of neural networks.'
        };
    }

    return {
        score: 5,
        feedback: 'Good effort, but your answer could use more detail about neural networks.'
    };
}

module.exports = { analyzeResponse };
