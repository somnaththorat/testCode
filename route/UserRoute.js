import express from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../controller/UserController.js';
import { handleReq } from '../middleware/HandleReq.js';

const router = express.Router();

router.get('/', handleReq, getUsers);
router.post('/', createUser);
router.patch('/', handleReq, updateUser);
router.delete('/', handleReq, deleteUser);

export default router;
