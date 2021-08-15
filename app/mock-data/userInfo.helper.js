const casual = require('casual');

const type = 'userInfo';

casual.define(type, function () {
    const image = 'https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg';
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
