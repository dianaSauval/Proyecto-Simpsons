import { render } from "../test-utils";
import Cita from "../features/quote/Quote";
import { IQuote } from "../features/quote/types";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthorQuote } from "../features/quote/styled";

describe("Cita", ()=>{

    const cita: IQuote = {
        character: "Marge",
        quote: "I'm sleeping in the bath tub.",
        image: "url",
        characterDirection: "dirección 456"
    }



    describe("Si quiero una cita especifica", ()=>{
        it("debería mostrarme el botón Obtener Cita", async()=>{
            render(<Cita/>)
            expect (screen.getByRole("button")).toBeInTheDocument() 
/*             const inputAutor = screen.getByLabelText("Author Cita")
            userEvent.type(inputAutor, "Marge")
            expect (screen.getByLabelText("Obtener Cita")).toBeInTheDocument() */
        })
    })
})