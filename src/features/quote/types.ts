import { FETCH_STATE } from "./constants";

export interface IQuote {
  character: string;
  quote: string;
  image: string;
  characterDirection: string;
}

export interface quoteState {
  data: IQuote | null;
  state: FETCH_STATE;
}
