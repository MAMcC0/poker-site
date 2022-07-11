const router = require('express').Router();
const userRoutes = require('./userRoutes');
const threecardRoutes = require('./threecardroutes');

router.use('/users', userRoutes);
router.use('/threecardroutes', threecardRoutes);

module.exports = router;