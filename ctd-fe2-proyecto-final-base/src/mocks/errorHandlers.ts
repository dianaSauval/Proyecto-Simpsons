import { rest } from "msw";
import { API_URL } from "../app/constants";

export const errorHandlers = [
  rest.get(API_URL, (_, res, ctx) => res.once(ctx.status(403)))
];

 