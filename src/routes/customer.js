import { Router } from 'express';
import customerController from '../controllers/customerController';
const router = new Router();

router.get('/', customerController.listCustomer);
router.post('/add', customerController.saveCustomer);
router.get('/delete/:id',customerController.deleteCustomer);

export default router;
