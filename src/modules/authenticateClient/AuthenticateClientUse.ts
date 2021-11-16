import { ClientType } from "../../common/enums";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { AppError } from "../../errors/AppErrors";

interface IRequest {
  client: ClientType;
}

// interface IResponse {
//   client: ClientType;
//   token: string;
// }

class AuthenticateClientUse {
  static execute(request: Request, response: Response): Response {
    const { client } = request.body;

    if (
      !client ||
      (client !== ClientType.CLIENTE_VAREJAO &&
        client !== ClientType.CLIENTE_MACAPA)
    ) {
      throw new AppError("Cliente não existe!");
    }

    const token = sign({}, "3788603e4772fd2a8426b9fc3f36c6e5", {
      subject: client,
      expiresIn: "1d",
    });

    return response.json({ token, client });
  }
}

export { AuthenticateClientUse };
