import express from 'express';
const router = express.Router();

import customerController from '../controllers/customerController';

router.get('/', customerController.list );
router.post('/add', customerController.save);
router.get('/delete/:id',customerController.delete);

module.exports = router;