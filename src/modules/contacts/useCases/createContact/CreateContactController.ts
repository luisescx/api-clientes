import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateContactUseCase } from "./CreateContactUseCase";

class CreateContactController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, celular } = request.body;

    const createContactUseCase = container.resolve(CreateContactUseCase);

    await createContactUseCase.execute({ nome, celular });

    return response.status(201).send();
  }
}

export { CreateContactController };
