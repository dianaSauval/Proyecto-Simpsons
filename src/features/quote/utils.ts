import {
  FETCH_STATE,
  INVALID_NAME,
  MESSAGE_LOADING,
  NOT_FOUND,
} from "./constants";

export const getMessage: (
  quote: string,
  stateRequested: FETCH_STATE
) => string = (quote, stateRequested) => {
  if (stateRequested === FETCH_STATE.LOADING) {
    return MESSAGE_LOADING;
  }

  if (stateRequested === FETCH_STATE.ERROR) {
    return INVALID_NAME;
  }

  return quote ? `${quote}` : NOT_FOUND;
};
