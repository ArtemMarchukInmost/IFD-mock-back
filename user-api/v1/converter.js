const mock = require('../../app/mock-data/mock');

const example = {
    get: () => {
        return {
            example: mock.example,
        };
    }
};

module.exports = {
    example,
};
