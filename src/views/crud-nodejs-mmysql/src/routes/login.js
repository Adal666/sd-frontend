import express from 'express';
import LoginController from '../controllers/LoginController.js';

const router = express.Router();

router.get('/login', LoginController.login);
router.post('/login', LoginController.auth);
router.get('/register',LoginController.register);
router.post('/register',LoginController.storeUser);
router.get('/logout',LoginController.logout);

export default{
    router,
    app
}
