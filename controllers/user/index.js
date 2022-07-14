import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes.js';
import ActiveGame from './activeGame.js';
import cardRoute from './cardsRoute.js';

router.use('/users', userRoutes);
router.use('/game', ActiveGame);
router.use('/cards', cardRoute);

export default router;