import { Router } from "express";
import { createBlog, getAllBlog, searchBlog } from "../controllers/blogController.js";

const router = Router()

router.get('/',getAllBlog)
router.post('/add-blog', createBlog)
router.get('/search', searchBlog)

export default router