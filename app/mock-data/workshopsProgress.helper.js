const casual = require('casual');

const type = 'workshopsProgress';

casual.define(type, function () {
    const progress = casual.integer(50, 100);
    const completedWorkshops = casual.integer(1, 6);

    return {
        progress,
        completedWorkshops
    }
});

const workshopsCompleted = casual[type];

module.exports = {
    workshopsCompleted,
};
