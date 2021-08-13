const v1APIAuth = require('../../user-api/v1/router');

module.exports = {
    userAPI: (app) => {
        app.use('', v1APIAuth);
    },
};
