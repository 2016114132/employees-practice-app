import express from "express"
import { getHome, addFulltimeEmployee, addParttimeEmployee } from "../controllers/employeeController"
const router = express.Router();

router.get("/", getHome);
router.post("/add-fulltime", addFulltimeEmployee);
router.post("/add-parttime", addParttimeEmployee);

export default router