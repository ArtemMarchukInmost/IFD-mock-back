const express = require('express');
const router = express.Router({});
const asyncHandler = require('express-async-handler');
const controller = require('./controller');

router.get('/example',
    asyncHandler(controller.example.get)
);

router.get('/userInfo',
    asyncHandler(controller.userInfo.get)
);

module.exports = router;
