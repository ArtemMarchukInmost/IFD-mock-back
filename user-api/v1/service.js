const converter = require('./converter');

const example = {
    get: async (connection, options) => {
        const result = converter.example.get(options);

        return {
            'success': true,
            'result': result,
        }
    },
}

module.exports = {
    example
};
