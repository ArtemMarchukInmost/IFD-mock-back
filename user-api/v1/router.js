const express = require('express');
const router = express.Router({});
const asyncHandler = require('express-async-handler');
const controller = require('./controller');

router.get('/example',
    asyncHandler(controller.example.get)
);

module.exports = router;
