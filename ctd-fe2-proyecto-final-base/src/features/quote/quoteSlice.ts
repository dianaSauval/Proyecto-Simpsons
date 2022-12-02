import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { FETCH_STATE } from "./constants";
import { getQuote } from "./quoteAPI";
import { IQuote } from "./types";

export interface EstadoCita {
  data: IQuote | null;
  estado: FETCH_STATE;
}

const initialState: EstadoCita = {
  data: null,
  estado: FETCH_STATE.INACTIVE,
};

export const obtenerCitaAsync = createAsyncThunk(
  "cita/obtenerCita",
  async (personaje: string) => {
    try {
      const cita = await getQuote(personaje);

      return cita;
    } catch (err) {
      throw err;
    }
  }
);

export const quoteSlice = createSlice({
  name: "citas",
  initialState,
  reducers: {
    limpiar: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(obtenerCitaAsync.pending, (state) => {
        state.estado = FETCH_STATE.LOADING;
      })
      .addCase(obtenerCitaAsync.fulfilled, (state, action) => {
        state.estado = FETCH_STATE.INACTIVE;
        state.data = action.payload;
      })
      .addCase(obtenerCitaAsync.rejected, (state) => {
        state.estado = FETCH_STATE.ERROR;
      });
  },
});

export const { limpiar } = quoteSlice.actions;

export const obtenerCitaDeLaAPI =
  (character: string) => (dispatch: AppDispatch) => {
    dispatch(limpiar());
    dispatch(obtenerCitaAsync(character));
  };

export const getQuoteFromState = (state: RootState) => state.cita.data;
export const getStateFromRequest = (state: RootState) => state.cita.estado;

export default quoteSlice.reducer;
