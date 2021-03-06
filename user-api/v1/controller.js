const {controller} = require('../../app/helpers/helper');
const service = require('./service');

const example = {
    get: async (req, res) => {
        await controller.sendJson(res, async (connection) => {
            return await service.example.get(connection, req.options);
        });
    }
}

const userInfo = {
    get: async (req, res) => {
        await controller.sendJson(res, async (connection) => {
            return await service.userInfo.get(connection, req.options);
        });
    }
}

const datesWithEntries = {
    get: async (req, res) => {
        await controller.sendJson(res, async (connection) => {
            return await service.datesWithEntries.get(connection, req.options);
        });
    }
}

const workshopsProgress = {
    get: async (req, res) => {
        await controller.sendJson(res, async (connection) => {
            return await service.workshopsProgress.get(connection, req.options);
        });
    }
}

const workshopsParts = {
    get: async (req, res) => {
        await controller.sendJson(res, async (connection) => {
            return await service.workshopsParts.get(connection, req.options);
        });
    }
}

module.exports = {
    example,
    userInfo,
    datesWithEntries,
    workshopsProgress,
    workshopsParts,
};
