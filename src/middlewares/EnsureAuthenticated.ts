import { ClientType } from "../common/enums";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppErrors";

interface ITokenPayload {
  //   iat: number;
  //   exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("Token não informado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "3788603e4772fd2a8426b9fc3f36c6e5");

    if (
      sub !== ClientType.CLIENTE_VAREJAO &&
      sub !== ClientType.CLIENTE_MACAPA
    ) {
      throw new AppError("Cliente não existe", 401);
    }

    next();
  } catch {
    throw new AppError("Token inválido", 401);
  }
}
