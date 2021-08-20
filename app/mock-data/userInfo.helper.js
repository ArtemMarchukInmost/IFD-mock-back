const casual = require('casual');

const type = 'userInfo';

casual.define(type, function () {
    const avatar = 'https://sunmag.me/wp-content/uploads/2016/05/gipnoz1.jpg';
    const background = null;
    const welcomeName = `${casual.letter.toUpperCase()}${casual.word}`;
    const firstName = `${casual.letter.toUpperCase()}${casual.word}`;
    const lastName = `${casual.letter.toUpperCase()}${casual.word}`;
    const email = casual.email;
    const mobile = '+' + casual.integer(1111111111, 9999999999);
    const emergencyNumber = '+' + casual.integer(1111111111, 9999999999);


    return {
        avatar,
        background,
        welcomeName,
        firstName,
        lastName,
        email,
        mobile,
        emergencyNumber
    }
});

const userInfo = casual[type];

module.exports = {
    userInfo,
};
