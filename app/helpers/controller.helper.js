const doom = require('./doom.helper');

function simulateLoading() {
    return new Promise(resolve => {
        let timeout = Math.floor(Math.random() * 500) + 100;
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}

async function sendJson(res, action, status = doom.status.ok) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 500);
    });

    let result = await action(null);

    if (result === null) {
        throw new Error('Transaction not correct.');
    }

    await simulateLoading();

    if (result.success) {
        return res.status(status).json({
            ...result.result
        });
    } else {
        return res.status(result.statusCode).json({
            success: result.success,
            message: result.message,
            error: result.error,
            errorCode: result.errorCode
        });
    }
}

async function sendFile(res, action, pathSuccess, pathFail, status = doom.status.ok) {
    let result = await action(null);

    if (result === null) {
        throw new Error('Transaction not correct.');
    }

    if (result.success) {
        return res.status(status).sendFile(pathSuccess);
    } else {
        return res.status(result.statusCode).sendFile(pathFail);
    }
}

async function sendOnlyFile(res, path, status = doom.status.ok) {
    return res.status(status).sendFile(path);
}

async function sendBuffer(res, action, status = doom.status.ok) {
    let result = await action(null);

    if (result === null) {
        throw new Error('Transaction not correct.');
    }

    if (result.success) {
        res.status(status);
        res.setHeader('Content-Disposition', 'attachment; filename=' + `file.pdf`);
        res.setHeader('Content-Type', 'application/pdf');
        res.write(result.result.buffer, 'binary');
        res.end(undefined, 'binary');
    } else {
        return res.status(result.statusCode).json({
            success: result.success,
            message: result.message,
            error: result.error,
            errorCode: result.errorCode
        });
    }
}

function send(res, result, status = doom.status.ok) {
    if (result.success) {
        return res.status(status).json(result);
    } else {
        return res.status(result.statusCode).json({
            success: result.success,
            message: result.message,
            error: result.error,
            errorCode: result.errorCode
        });
    }
}

module.exports = {
    sendJson,
    sendFile,
    sendOnlyFile,
    sendBuffer,
    send
};
