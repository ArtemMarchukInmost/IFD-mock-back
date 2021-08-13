const config = require('config');

config.regExp = {
    password: new RegExp('^\\S{6,128}$'),
};

config.general = {
    'host': config.general.host,
    'port': config.general.port,
    'link': config.general.link,
    'fullMode': config.general.fullMode,
    'paginationLimit': config.general.paginationLimit,
};

config.loading = {
    'simulateLoading': config.loading.simulateLoading,
    'maxLoading': config.loading.maxLoading,
    'minLoading': config.loading.minLoading,
};

config.morgan = {
    'name': config.morgan.name,
    'format': config.morgan.format,
    'morganBody': config.morgan.morganBody,
};

config.database = {
    'user': config.database.user,
    'host': config.database.host,
    'database': config.database.database,
    'password': config.database.password,
    'port': config.database.port,
};

config.JWT = {
    'secret': {
        'user': {
            'accessToken': config.JWT.secret.user.accessToken,
            'refreshToken': config.JWT.secret.user.refreshToken,
            'passwordForgotToken': config.JWT.secret.user.passwordForgotToken,
        },
        'admin': {
            'accessToken': config.JWT.secret.admin.accessToken,
            'refreshToken': config.JWT.secret.admin.refreshToken,
        },
    },
    'lifetime': {
        'accessToken': config.JWT.lifetime.accessToken,
        'refreshToken': config.JWT.lifetime.refreshToken,
        'passwordForgotToken': config.JWT.lifetime.passwordForgotToken,
    }
};

config.aws = {
    's3': {
        'bucketName': config.aws.s3.bucketName,
        'region': config.aws.s3.region,
        'accessKeyId': config.aws.s3.accessKeyId,
        'secretAccessKey': config.aws.s3.secretAccessKey,
        's3Url': config.aws.s3.s3Url,
        's3UrlSpeech': config.aws.s3.s3UrlSpeech,
        dir: {
            'speech': config.aws.s3.dir.speech,
        }
    },
};

config.languages = {
    'available': [
        'ru',
        'en',
    ],
};

config.userStatus = {
    'login': 'login',
    'logout': 'logout',
};

config.study = {
    // The maximum number of responses for one stage
    'maxForOneStage': 3,
};

module.exports = config;
