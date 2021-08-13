const defaultGeneralConfigData = (userLanguage) => {
    return {
        theme: {
            background: 'dark',
            color: 'green',
        },
        localization: {
            language: userLanguage,
        },
        general: {
            startLearningNow: false,
            speakersCount: 'many'
        },
        transparencyInterface: {
            onlyWhenLearning: false,
            additionalInterface: true,
            level: 0
        },
        additionalInterface: {
            showTotalAnswerCount: false,
            showCorrectAnswerCount: true,
            showIncorrectAnswerCount: true,
            showTrueOrFalse: true
        },
        indicator: {
            direction: 'indicator-right'
        }
    }
};

module.exports = {
    defaultGeneralConfigData,
};
