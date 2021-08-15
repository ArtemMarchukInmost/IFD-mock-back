const casual = require('casual');

const type = 'userInfo';

casual.define(type, function () {
    const image = 'https://sunmag.me/wp-content/uploads/2016/05/gipnoz1.jpg';
    const background = 'https://img.strana.ua/img/article/2625/70_main.jpeg';
    const progress = casual.integer(0, 100);
    const workshopsCompleted = casual.integer(0, 6);

    return {
        userPicture: image,
        backgroundPicture: background,
        progress,
        workshopsCompleted,
    }
});

const userInfo = casual[type];

module.exports = {
    userInfo,
};
