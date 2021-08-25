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
        return {
            list: mock.datesWithEntries.openDates
        };
    }
};

const workshopsProgress = {
    get: () => {
        return {
            ...mock.workshopsProgress.workshopsCompleted
        };
    }
};

const workshopsParts = {
    get: () => {
        return {
            list: mock.workshopsParts.workshopsParts
        };
    }
};

module.exports = {
    example,
    userInfo,
    datesWithEntries,
    workshopsProgress,
    workshopsParts,
};
