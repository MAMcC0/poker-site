import express from "express";
const router = express.Router();


import homeRoutes from './homeRoutes.js';
import threeCardRoutes from './threecardroutes.js';

router.use('/', homeRoutes);

router.use('/', threeCardRoutes);

export default router;
