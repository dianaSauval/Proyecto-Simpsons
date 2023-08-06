import { rest } from "msw";
import { API_URL } from "../app/constants";

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    /*     const dataNormalized = [
      {
        quote: "I'm sleeping in the bath tub.",
        character: "Marge",
        image: "url...",
        characterDirection: "dirección 1516"
      },
    ];
    const mockResponse = {dataNormalized} */

    return res(
      ctx.json([
        {
          quote: "I'm sleeping in the bath tub.",
          character: "Marge Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
          characterDirection: "Left",
        },
      ])
    );
  }),
];
