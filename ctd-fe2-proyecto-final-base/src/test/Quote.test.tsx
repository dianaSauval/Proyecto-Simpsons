import { rest } from "msw";
import React from "react";
import { setupServer } from "msw/node";
import { API_URL } from "../app/constants";
import { render } from "../test-utils";
import { queryByText, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Quote from "../features/quote/Quote";
import { server } from "../mocks/server";


beforeAll(() => server.listen)

afterEach(() => server.resetHandlers)

afterAll(() => server.close)



describe("Quote", ()=>{
    describe("Initially", ()=>{
        it("should show initial state by default", async()=>{
            render(<Quote/>)
            expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument()
        })
    })
    describe("random quote", ()=>{
        it("should show a loading state", async()=>{
            render(<Quote/>)
            const buttonAleatorio = screen.getByText("Obtener cita aleatoria")
            await userEvent.click(buttonAleatorio)
            expect(screen.getByText("CARGANDO...")).toBeInTheDocument()
        })
        /* it("should render the correct information", async()=>{
            render(<Quote/>)
            const randomButton = screen.getByText("Obtener cita aleatoria")
            userEvent.click(randomButton)
            expect(screen.queryByText("CARGANDO...")).not.toBeInTheDocument()
            expect(
                await screen.findByText("I'm sleeping in the bath tub.")
              ).toBeInTheDocument();
        }) */
    })
    describe("specific quote", ()=>{
        it("should show a loading state", async()=>{
            render(<Quote/>)
            const inputAutor = screen.getByLabelText("Author Cita")
            await userEvent.type(inputAutor, "Marge")
            const button = screen.getByText("Obtener Cita")
            await userEvent.click(button)
            expect(screen.getByText("CARGANDO...")).toBeInTheDocument()
        })

        it("should render the correct information", async()=>{
            render(<Quote/>)
            const inputAutor = screen.getByLabelText("Author Cita")
            await userEvent.type(inputAutor, "Marge")
            const button = screen.getByText("Obtener Cita")
            await userEvent.click(button)   
            await waitFor(() => {
                expect(screen.getByText("Marge Simpson")).toBeInTheDocument();
              },{timeout: 3000});
            /* const quote = await screen.findByText("Marge")
            expect(quote).toBeInTheDocument(); */
        })
    })

    describe("Error invalid", ()=>{
        it("should show the error message", async()=>{
            render(<Quote/>)
            const inputAutor = screen.getByLabelText("Author Cita")
            await userEvent.type(inputAutor, "2")
            const button = screen.getByText("Obtener Cita")
            await userEvent.click(button)
            expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument();
        })
    })

    describe("Error server", ()=>{
        it("should show the server error message", async()=>{
            server.use(
                rest.get(API_URL, (req, res, ctx)=>{
                    return res(ctx.status(500))
                })
            )
            render(<Quote/>)
            expect(await screen.findByText("No se encontro ninguna cita")).toBeInTheDocument();
        })
    })

})
