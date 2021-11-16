import { Router } from "express";
import ensureAuthenticated from "../middlewares/EnsureAuthenticated";
import { CreateContactController } from "../modules/contacts/useCases/createContact/CreateContactController";
import { ListContactsController } from "../modules/contacts/useCases/listContacts/ListContactsController";
import { DeleteContactController } from "../modules/contacts/useCases/deleteContact/DeleteContactController";
import { FindContactController } from "../modules/contacts/useCases/findContact/FindContactController";

const contactsRoutes = Router();

const createContactController = new CreateContactController();
const listContactsController = new ListContactsController();
const deleteContactController = new DeleteContactController();
const findContactController = new FindContactController();

contactsRoutes.post(
  "/createContact",
  ensureAuthenticated,
  createContactController.handle
);

contactsRoutes.get(
  "/deleteContact/:id",
  ensureAuthenticated,
  deleteContactController.handle
);

contactsRoutes.get(
  "/listAllContacts",
  ensureAuthenticated,
  listContactsController.handle
);

contactsRoutes.get(
  "/getById/:id",
  ensureAuthenticated,
  findContactController.handle
);

export { contactsRoutes };
