import express from "express";
const router = express.Router();


import homeRoutes from './homeRoutes.js';
import apiRoutes from './user/index.js';

router.use('/', homeRoutes);

router.use('/user', apiRoutes);

export default router;
