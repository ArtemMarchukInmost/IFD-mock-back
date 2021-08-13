const casual = require('casual');

const type = 'example';

casual.define(type, function () {
    return casual.sentences(5);
});

const example = casual[type];

module.exports = {
    example,
};
