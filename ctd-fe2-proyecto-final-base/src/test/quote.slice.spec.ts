import quoteReducer, { clear } from "../features/quote/quoteSlice";
import { FETCH_STATE } from "../features/quote/constants";
import { quoteState } from "../features/quote/types";

describe("Reducer", ()=>{
  const initialState: quoteState = {
    data: null,
    state: FETCH_STATE.INACTIVE,
  };

  describe("as defautl", ()=>{
    it("should return the initial state", ()=>{
      const actual = quoteReducer(initialState,{type:"any"});
      expect(actual).toEqual(initialState);
    });
  });
  describe("clear", ()=>{
    it("should return the initial state", ()=>{
      const actual = quoteReducer(initialState,clear());
      expect(actual).toEqual(initialState);
    });
  });

});