const { Router } = require('express');

const router = Router();


const seriesControllers = require('./controllers/seriesControllers')

router.post('/serie', seriesControllers.newSeries)
router.get('/series', seriesControllers.allSeries)

module.exports = router 