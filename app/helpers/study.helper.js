const config = require('./config.helper');

const learnTimeRange = [
    1200000, // 20 min
    3600000, // 1h
    32400000, // 9h
    86400000, // 1d
    172800000, // 2d
    518400000, // 6d
    2592000000, // 30d
];

function findDateRange(now, timeOfCreation) {
    return new Date(now).getTime() - new Date(timeOfCreation).getTime();
}

function convertStudyElements(elements) {
    let now = new Date();
    let toStudy = [];
    let totalPointsCounter = 0;
    let stageCounter = 0;
    let studyPercent;

    // Ищем для каждого слова текущий этап
    for (const element of elements) {
        const foundDateRange = findDateRange(now, element.time_of_creation);
        const foundCurrentStage = findCurrentStage(foundDateRange);
        element.total_points = foundCurrentStage * config.study.maxForOneStage;
        element.stage = element.total_points / config.study.maxForOneStage;

        totalPointsCounter += element.total_points;
        stageCounter += element.current_points;

        if (element.total_points > element.current_points) {
            toStudy.push(element);
        }
    }

    studyPercent = stageCounter / totalPointsCounter * 100;

    // Сортируем каждый этап, и ставим от самого большого к самому малому
    elements.sort((a, b) => {
        return a.total_points > b.total_points;
    });
    elements.reverse();
    return {
        toStudy,
        studyPercent,
    };
}

function findNextStudyElements(elements, toStudy, lastLearnedElements, numberElementLearnedAtTime) {
    let result = [];
    let lastLearnedElementsSet = new Set();

    let maximumLimitation = toStudy.length - numberElementLearnedAtTime;
    for (const element of lastLearnedElements) {
        if (maximumLimitation <= lastLearnedElementsSet.size) {
            break;
        }
        lastLearnedElementsSet.add(element.word_id);
    }

    for (const element of toStudy) {
        if (lastLearnedElementsSet.has(element.word_id)) {
            continue;
        }

        result.push(element);
        if (result.length >= numberElementLearnedAtTime) {
            break;
        }
    }

    return {
        words: result,
        wordsToLearn: toStudy.length,
    };
}

function findNextTrainingElements(elements, lastLearnedElements, numberElementLearnedAtTime) {
    let now = new Date();
    let result = [];
    let lastLearnedElementsSet = new Set();

    // Ищем для каждого слова текущий этап
    for (const element of elements) {
        const foundDateRange = findDateRange(now, element.time_of_creation);
        const foundCurrentStage = findCurrentStage(foundDateRange);
        element.total_points = foundCurrentStage * config.study.maxForOneStage;
        element.stage = element.total_points / config.study.maxForOneStage;
    }

    let maximumLimitation = elements.length - numberElementLearnedAtTime;
    for (const element of lastLearnedElements) {
        if (maximumLimitation <= lastLearnedElementsSet.size) {
            break;
        }
        lastLearnedElementsSet.add(element.word_id);
    }

    for (const element of elements) {
        if (lastLearnedElementsSet.has(element.word_id)) {
            continue;
        }

        result.push(element);
        if (result.length >= numberElementLearnedAtTime) {
            break;
        }
    }

    return {
        words: result,
        wordsToLearn: elements.length,
    };
}

function findCurrentStage(timeRange) {
    let index = 0;
    let currentRange = -1;
    let generateRange = 2;

    while (true) {
        if (timeRange >= learnTimeRange[index]) {
            index++;
            continue;
        } else if (timeRange >= learnTimeRange[learnTimeRange.length - 1] * generateRange) {
            index++;
            generateRange += 2;
            continue;
        }

        currentRange = index;
        break;
    }

    return currentRange + 1;
}

module.exports = {
    findDateRange,
    findNextTrainingElements,
    convertStudyElements,
    findCurrentStage,
    findNextStudyElements,
};
