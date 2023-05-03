import express from "express"
import auth from '../middleware/auth.js'
import { postAnswer, deleteAnswer } from '../controllers/Answers.js'

const router = express.Router();
// patch is used instead of post as we just need to update existing schema/ record.
router.patch('/post/:id', auth, postAnswer)
router.patch('/delete/:id', auth, deleteAnswer)
export default router;

