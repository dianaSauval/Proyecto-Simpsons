import { render } from "../test-utils";
import Quote from "../features/quote/Quote";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Cita", ()=>{
    describe("Si quiero una cita aleatoria", ()=>{
        it("debería mostrarme el botón Obtener cita aleatoria", async()=>{
            render(<Quote/>)
            expect (screen.getByLabelText("Obtener cita aleatoria")).toBeInTheDocument()
        })
    })

    describe("Si quiero una cita especifica", ()=>{
        it("debería mostrarme el botón Obtener Cita", async()=>{
            render(<Quote/>) 
            const inputAutor = screen.getByLabelText("Author Cita")
            await userEvent.type(inputAutor, "Marge")
            expect (screen.getByLabelText("Obtener Cita")).toBeInTheDocument()
        })
    })
})