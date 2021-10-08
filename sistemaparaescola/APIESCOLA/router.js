const { Router } = require('express');

const router = Router();


const seriesControllers = require('./controllers/seriesControllers')

router.post('/serie', seriesControllers.newSeries)
router.get('/series', seriesControllers.allSeries)
router.put('/serie/:id', seriesControllers.updateSeries)
router.delete('/serie/:id', seriesControllers.deleteSerie)



module.exports = router 