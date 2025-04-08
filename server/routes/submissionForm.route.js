import express from "express"; 
import { createSubs, getSubs } from "../controller/submissionForm.controller.js" ; 
const router = express.Router();


router.post("/", createSubs ) ; // fr users : create a submission form
router.get("/", getSubs ) ; // for admin : get all submission forms

export default router ; 