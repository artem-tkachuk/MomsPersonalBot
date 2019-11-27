import Router from 'express';

import handleRoutes from './handler';

const token = process.env.token;

const router = Router();
router.post(`/${token}`, handleRoutes);

export default router;



