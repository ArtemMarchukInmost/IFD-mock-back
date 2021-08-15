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

module.exports = {
    example,
    userInfo,
};
