const router = require('express').Router();


const homeRoutes = require('./homeRoutes');
const threeCardRoutes = require('./threecardroutes');

router.use('/', homeRoutes);

router.use('/', threeCardRoutes);

module.exports = router;
