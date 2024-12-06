const cache = new Map();

function has(key) {
    return cache.has(key);
}

function get(key) {
    return cache.get(key);
}

function set(key, value) {
    cache.set(key, value);
}

module.exports = { has, get, set };
