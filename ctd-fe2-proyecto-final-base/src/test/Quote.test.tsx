import { rest } from "msw";
import { setupServer } from "msw/node";
import { API_URL } from "../app/constants";
import { render } from "../test-utils";
import  Cita from "../features/quote/Quote";
import { screen } from "@testing-library/react";
import { AuthorQuote } from "../features/quote/styled";
import userEvent from "@testing-library/user-event";

const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    const dataNormalizada = [
      {
        cita: "I'm sleeping in the bath tub.",
        personaje: "Marge",
        imagen: "url...",
        direccionPersonaje: "dirección 1516",
      },
    ];
    const mockResponse = {Search:dataNormalizada}

    return res(ctx.json(mockResponse))
  }),
];

const server = setupServer(...handlers)

beforeAll(() => server.listen)

afterEach(() => server.resetHandlers)

afterAll(() => server.close)

jest.mock('./Cita', ()=>()=>{
    return <div>Cita</div>
})

describe("Cita", ()=>{
/*     describe("Estado cargando", ()=>{
        it("debería mostrar mensaje de cargando", ()=>{
            const buttonAleatorio = screen.getByText("Obtener cita aleatoria")
            render(<Cita/>)
            expect((await screen.findAllByText("Cita")).length).toBeGreaterThan(0);
        })
    }) */
    describe("Cita al azar", ()=>{
        it("debería renderizar la información correcta", async()=>{
            render(<Cita/>)
            expect((await screen.findAllByText("Cita")).length).toBeGreaterThan(0);
        })
    })

/*     describe("Error", ()=>{
        it("debería mostrar el mensaje de error", async()=>{
            server.use(
                rest.get(API_URL, (req, res, ctx)=>{
                    return res(ctx.status(500))
                })
            )
            render(<Cita/>)
            expect(await screen.findByText("No se encontro ninguna cita")).toBeInTheDocument();
        })
    }) */

})
