import { render } from "../test-utils";
import Quote from "../features/quote/Quote";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Quote", ()=>{
    describe("random quote button", ()=>{
        it("should show me the random quote button", async()=>{
            render(<Quote/>)
            expect (screen.getByLabelText("Obtener cita aleatoria")).toBeInTheDocument()
        })
    })

    describe("specific quote button", ()=>{
        it("should show me the specific quote button", async()=>{
            render(<Quote/>) 
            const inputAutor = screen.getByLabelText("Author Cita")
            await userEvent.type(inputAutor, "Marge")
            expect (screen.getByLabelText("Obtener Cita")).toBeInTheDocument()
        })
    })

    describe("delete button", ()=>{
        it("should clear the content of the input", async()=>{
            render(<Quote/>) 
            const inputAutor = screen.getByLabelText("Author Cita")
            const deleteButton = screen.getByLabelText("Borrar")
            await userEvent.type(inputAutor, "Marge")
            await userEvent.click(deleteButton)
            expect (screen.getByPlaceholderText("Ingresa el nombre del autor")).toBeInTheDocument()
        })
    })

    
})