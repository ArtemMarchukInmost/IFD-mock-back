const status = {
    ok: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    conflict: 409,
    unprocessableEntity: 422,
};

const errorCode = {
    // Wrong data. To send the correct data you need to use the documentation.
    validation: 100,

    // The token in the request was not found.
    tokenNotFound: 110,

    // The token in the request is not correct.
    tokenNotValid: 111,

    // Token lifetime expired.
    tokenExpired: 112,

    /**
     * This email has already been registered.
     * Therefore, we can not register it twice.
     * So, as it is already in our database.
     */
    emailAlreadyRegistered: 120,

    // This email is not found in the database.
    emailNotFound: 121,

    // Password does not match email.
    passwordNotValid: 130,

    // An item cannot be deleted because it does not exist.
    itemCannotUpdatedDoesNotExist: 140,

    // An item cannot be deleted because it does not exist.
    itemCannotDeletedDoesNotExist: 141,

    // An item cannot be return because it does not exist.
    itemNotFound: 150,

    // An item cannot be return because it does not exist.
    itemByIdNotFound: 151,

    // The config cannot be deleted since at least one user must have.
    cannotBeDeletedLastElement: 160,

    // Identifiers must be different.
    identifiersMustBeDifferent: 170,

    // Positions must be different.
    positionsMustBeDifferent: 171,

    // Identifiers must be specified.
    identifierMustBeSpecified: 180,

    // Not enough data for request.
    notEnoughDataForRequest: 191,

    // Rename item failed.
    renameItemFailed: 200,

    // Cannot be deleted incorrect type
    cannotBeDeletedIncorrectType: 210,

    // Languages cannot be the same.
    languagesCannotBeSame: 220,

    // The item cannot be updated.
    itemCannotBeUpdated: 230
};

const error = {
    validation: (res, error) => {
        return res.status(status.unprocessableEntity).json({
            success: false,
            message: error.message.replace(/"/g, ''),
            error: 'Bad request',
            errorCode: errorCode.validation
        });
    },

    tokenNotFound: (res) => {
        return res.status(status.unauthorized).json({
            success: false,
            message: 'To pass the identification, we need a token.',
            error: "Token not found",
            errorCode: errorCode.tokenNotFound
        });
    },

    tokenNotValid: (res) => {
        return res.status(status.unauthorized).json({
            success: false,
            message: 'Token failed validation.',
            error: "Unauthorized access",
            errorCode: errorCode.tokenNotValid
        });
    },

    tokenExpired: (res) => {
        return res.status(status.unauthorized).json({
            success: false,
            message: 'Token lifetime expired.',
            error: "Unauthorized access",
            errorCode: errorCode.tokenExpired
        });
    },

    passwordNotValid: () => {
        return {
            statusCode: status.unauthorized,
            success: false,
            message: 'Password is not valid.',
            error: "Access Denied",
            errorCode: errorCode.passwordNotValid
        }
    },

    itemNotFound: () => {
        return {
            statusCode: status.notFound,
            success: false,
            message: 'An item cannot be return because it does not exist.',
            error: "Item not found",
            errorCode: errorCode.itemNotFound
        }
    },

    generalError: () => {
        return {
            statusCode: status.notFound,
            success: false,
            message: 'Wrong data',
            error: "Wrong data",
            errorCode: errorCode.itemNotFound
        }
    },

    notFoundBusiness: () => {
        return {
            statusCode: status.notFound,
            success: false,
            message: 'Ошибка выполнения. Нет такого бизнеса.',
            error: "Ошибка выполнения. Нет такого бизнеса.",
            errorCode: errorCode.itemNotFound
        }
    },

    notFoundPoint: () => {
        return {
            statusCode: status.notFound,
            success: false,
            message: 'Ошибка выполнения. Нет такой точки у бизнеса.',
            error: "Ошибка выполнения. Нет такой точки у бизнеса.'",
            errorCode: errorCode.itemNotFound
        }
    },
};

module.exports = {
    status,
    errorCode,
    error
};
