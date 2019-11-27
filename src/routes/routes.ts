import { Router } from 'express';

import handleRoutes from './handler';

const token = process.env.token;

const router = Router();

router.post(`/${token}`, handleRoutes);
router.get('/', (req, res) => {
    res.send('Hello from MomsPersonalBot!');
});

export default router;



