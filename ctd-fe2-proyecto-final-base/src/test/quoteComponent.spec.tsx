import { render } from "../test-utils";
import Quote from "../features/quote/Quote";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Quote", ()=>{
    describe("If I want a random quote", ()=>{
        it("should show me the random quote button", async()=>{
            render(<Quote/>)
            expect (screen.getByLabelText("Obtener cita aleatoria")).toBeInTheDocument()
        })
    })

    describe("If I want a specific quote", ()=>{
        it("should show me the specific quote button", async()=>{
            render(<Quote/>) 
            const inputAutor = screen.getByLabelText("Author Cita")
            await userEvent.type(inputAutor, "Marge")
            expect (screen.getByLabelText("Obtener Cita")).toBeInTheDocument()
        })
    })

    
})