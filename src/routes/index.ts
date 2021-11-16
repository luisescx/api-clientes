import { Router } from "express";
import { contactsRoutes } from "./contacts.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/contacts", contactsRoutes);
router.use(authenticateRoutes);

export { router };
