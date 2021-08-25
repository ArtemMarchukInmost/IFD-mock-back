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

router.get('/datesWithEntries',
    asyncHandler(controller.datesWithEntries.get)
);

router.get('/workshopsProgress',
    asyncHandler(controller.workshopsProgress.get)
);

router.get('/workshopsParts',
    asyncHandler(controller.workshopsParts.get)
);

module.exports = router;
