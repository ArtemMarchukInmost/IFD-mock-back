const mock = require('../../app/mock-data/mock');

const example = {
    get: () => {
        return {
            example: mock.example,
        };
    }
};

const userInfo = {
    get: () => {
        return {...mock.userInfo.userInfo};
    }
};

const datesWithEntries = {
    get: () => {
        return mock.datesWithEntries;
    }
};

module.exports = {
    example,
    userInfo,
    datesWithEntries,
};
