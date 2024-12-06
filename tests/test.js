const { analyzeResponse } = require('../client/analysis');

test('Empty response should return score 0', () => {
    const result = analyzeResponse('');
    expect(result.score).toBe(0);
    expect(result.feedback).toBe('Your response is empty. Please try again.');
});

test('Valid response with neural network should score 10', () => {
    const result = analyzeResponse('Neural networks are the backbone of deep learning.');
    expect(result.score).toBe(10);
    expect(result.feedback).toMatch(/Great job/);
});

test('Valid response without detail should score 5', () => {
    const result = analyzeResponse('AI is important.');
    expect(result.score).toBe(5);
    expect(result.feedback).toMatch(/Good effort/);
});
