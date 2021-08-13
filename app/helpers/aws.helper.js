const config = require('./config.helper');
const AWS = require('aws-sdk/index');
const {v4: uuidv4} = require('uuid');

AWS.config.update({
    accessKeyId: config.aws.s3.accessKeyId,
    secretAccessKey: config.aws.s3.secretAccessKey
});

let s3 = new AWS.S3({
    params: {Bucket: config.aws.s3.bucketName}
});

async function addSpeechElement(buffer, fileName) {
    await addFile(buffer, fileName, config.aws.s3.dir.speech);
}

async function addFile(buffer, fileName, dir) {
    if (!config.general.fullMode) return;

    let params = {
        Key: dir + "/" + fileName,
        Body: buffer
    };

    await s3.upload(params).promise();
}

function getUniqueFileName(extension) {
    return uuidv4() + '.' + extension;
}

function getSpeechUrl(uniqueName) {
    return config.aws.s3.s3UrlSpeech + '/' + uniqueName;
}

module.exports = {
    addSpeechElement,
    getUniqueFileName,
    getSpeechUrl,
};
