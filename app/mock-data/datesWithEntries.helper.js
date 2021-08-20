const casual = require('casual');

const type = 'openDates';

casual.define(type, function () {
    const dates = [];

    for (let i = 0; i < casual.integer(5, 15); i++) {
        const date = new Date();
        date.setDate(date.getDate() + casual.integer(-15, 15));
        dates.push(date.toISOString());
    }

    return dates;
});

const openDates = casual[type];

module.exports = {
    openDates,
};
