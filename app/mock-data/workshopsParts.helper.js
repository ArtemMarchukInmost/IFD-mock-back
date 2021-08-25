const casual = require('casual');

const type = 'workshopsParts';

casual.define(type, function () {
    const result = [];

    for (let i = 0; i < casual.integer(3, 5); i++) {
        result.push({
            id: casual.integer(12, 123123123),
            title: casual.word,
            steps: [],
        })
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < casual.integer(3, 10); j++) {
            switch (j % 3) {
                case 0:
                    result[i].steps.push({
                        id: casual.integer(345, 4999999999),
                        type: "TEXT",
                        title: casual.short_description,
                        description: casual.description,
                        isWatched: casual.boolean,
                    });
                    break;
                case 1:
                    result[i].steps.push({
                        id: casual.integer(345, 4999999999),
                        type: "QUIZ",
                        title: casual.short_description,
                        description: casual.description,
                        isWatched: casual.boolean,
                    });
                    break;
                case 2:
                    result[i].steps.push({
                        id: casual.integer(345, 4999999999),
                        type: "VIDEO",
                        title: casual.short_description,
                        description: casual.description,
                        isWatched: casual.boolean,
                        videoLink: "https://www.youtube.com/watch?v=LA9hbbnnotg&t=360s",
                    });
                    break;
            }
        }
    }

    return result;
});

const workshopsParts = casual[type];

module.exports = {
    workshopsParts,
};
