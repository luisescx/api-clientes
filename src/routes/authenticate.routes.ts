import { Router } from "express";
import ensureAuthenticated from "../middlewares/EnsureAuthenticated";
import { AuthenticateClientUse } from "../modules/authenticateClient/AuthenticateClientUse";

const authenticateRoutes = Router();

authenticateRoutes.post("/token", AuthenticateClientUse.execute);

export { authenticateRoutes };
