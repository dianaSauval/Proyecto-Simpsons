import { rest } from "msw";
import { API_URL } from "../app/constants";

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    const dataNormalized = [
      {
        quote: "I'm sleeping in the bath tub.",
        character: "Marge",
        image: "url...",
        characterDirection: "dirección 1516",
      },
    ];
    const mockResponse = {dataNormalized}

    return res(ctx.json(mockResponse))
  }),
];