import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes.js';
import ActiveGame from './activeGame.js';

router.use('/users', userRoutes);
router.use('/game', ActiveGame);

export default router;