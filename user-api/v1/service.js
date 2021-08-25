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

const workshopsProgress = {
    get: async (connection, options) => {
        const result = converter.workshopsProgress.get(options);

        return {
            'success': true,
            'result': result,
        }
    },
}

const workshopsParts = {
    get: async (connection, options) => {
        const result = converter.workshopsParts.get(options);

        return {
            'success': true,
            'result': result,
        }
    },
}

module.exports = {
    example,
    userInfo,
    datesWithEntries,
    workshopsProgress,
    workshopsParts
};
