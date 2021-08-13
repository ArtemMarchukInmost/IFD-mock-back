module.exports = {
    aws: require('./aws.helper'),
    config: require('./config.helper'),
    controller: require('./controller.helper'),
    doom: require('./doom.helper'),
    general: require('./general.helper'),
    header: require('./header.helper'),
    pg: require('./pg.helper'),
    study: require('./study.helper'),
    token: require('./token.helper'),
    user: require('./user.helper'),
    validator: require('./validator.helper'),

    middlewares: {
        authUser: require('../middlewares/auth-user-handler'),
        authAdmin: require('../middlewares/auth-admin-handler'),
        cors: require('../middlewares/cors-handler'),
        error: require('../middlewares/error-handler'),
        notFound: require('../middlewares/not-found-handler')
    }
};
