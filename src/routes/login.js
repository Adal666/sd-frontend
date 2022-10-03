"use strict";
import LoginController from '../controllers/loginController.js';
import { Router } from 'express';
const router = new Router();

router.get('/login', LoginController.login);
router.post('/login', LoginController.auth);
router.get('/register',LoginController.register);
router.post('/register',LoginController.storeUser);
router.get('/logout',LoginController.logout);

export default router;
