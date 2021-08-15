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

const userInfo = {
    get: async (connection, options) => {
        const result = converter.userInfo.get(options);

        return {
            'success': true,
            'result': result,
        }
    },
}

const datesWithEntries = {
    get: async (connection, options) => {
        const result = converter.datesWithEntries.get(options);

        return {
            'success': true,
            'result': result,
        }
    },
}


module.exports = {
    example,
    userInfo,
    datesWithEntries
};
