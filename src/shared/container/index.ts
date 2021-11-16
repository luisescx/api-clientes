import { container } from "tsyringe";

import { IContactsRepository } from "../../modules/contacts/repositories/IContactsRepository";
import { ContactsRepository } from "../../modules/contacts/repositories/implementations/ContactsRepository";

container.registerSingleton<IContactsRepository>(
  "ContactsRepository",
  ContactsRepository
);
