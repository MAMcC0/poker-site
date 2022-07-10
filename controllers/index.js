const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const threeCardRoutes = require('./threecardroutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.use('/', threeCardRoutes);

module.exports = router;
