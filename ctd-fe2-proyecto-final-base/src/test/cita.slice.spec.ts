import citaReducer, { EstadoCita, clear } from "../features/quote/quoteSlice"
import { screen } from "@testing-library/react";
import { FETCH_STATE } from "../features/quote/constants"

describe("Reducer", ()=>{
    const initialState: EstadoCita = {
        data: null,
        state: FETCH_STATE.INACTIVE,
    }

    describe("as defautl", ()=>{
        it("debería devolver el estado inicial", ()=>{
            const actual = citaReducer(initialState,{type:"any"})
            expect(actual).toEqual(initialState)
        })
    })

    describe("limpiar", ()=>{
        it("debería devolver el estado inicial", ()=>{
            const actual = citaReducer(initialState,clear())
            expect(actual).toEqual(initialState)
        })
    })

})