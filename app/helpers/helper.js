module.exports = {
    controller: require('./controller.helper'),
    doom: require('./doom.helper'),
    general: require('./general.helper'),
    header: require('./header.helper'),

    middlewares: {
        cors: require('../middlewares/cors-handler'),
        error: require('../middlewares/error-handler'),
        notFound: require('../middlewares/not-found-handler')
    }
};
