import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes.js';
// import threecardRoutes from './threecardroutes.js';

router.use('/users', userRoutes);
// router.use('/threecardroutes', threecardRoutes);

export default router;