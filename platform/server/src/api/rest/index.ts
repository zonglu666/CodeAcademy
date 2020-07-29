import { Router } from 'express';
import bodyParser from 'body-parser';

const router = Router();
router.use(bodyParser.json());

router.use('/', (req, res, next) => {
  res.end('success');
});

export default router;
