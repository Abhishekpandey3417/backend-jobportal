/*import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

// ✅ Protected route: Create a new company (requires login)
router.post("/register", isAuthenticated, registerCompany);

// ✅ Protected routes: Fetch companies
router.get("/get", isAuthenticated, getCompany);
router.get("/get/:id", isAuthenticated, getCompanyById);

// ✅ Protected route: Update company
router.put("/update/:id", isAuthenticated, updateCompany);

export default router;*/

import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

// Create a company with optional logo upload
router.post("/register", isAuthenticated, singleUpload, registerCompany);

// Fetch companies
router.get("/get", isAuthenticated, getCompany);
router.get("/get/:id", isAuthenticated, getCompanyById);

// Update company with logo upload
router.put("/update/:id", isAuthenticated, singleUpload, updateCompany);

export default router;

