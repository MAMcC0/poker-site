import express from "express";
const router = express.Router();


import homeRoutes from './homeRoutes.js';
import apiRoutes from './api/index.js';

router.use('/', homeRoutes);

router.use('/user', apiRoutes);

export default router;
