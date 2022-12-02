import { useState } from "react";
import { shallowEqual } from "react-redux";
import { Button, Input, AuthorQuote, ContainerQuote, TextQuote } from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getQuoteFromState,
  clear,
  getStateFromRequest,
  getAPIQuote,
} from "./quoteSlice";
import { getMessage } from "./utils";

function Quote() {
  const [InputValue, setInputValue] = useState("");
  const { quote = "", character = "" } =
    useAppSelector(getQuoteFromState, shallowEqual) || {};
  const estadoPedido = useAppSelector(getStateFromRequest);

  const dispatch = useAppDispatch();

  const onClickGetQuote = () => dispatch(getAPIQuote(InputValue));

  const onClickDelete = () => {
    dispatch(clear());
    setInputValue("");
  };

  return (
    <ContainerQuote>
      <TextQuote>{getMessage(quote, estadoPedido)}</TextQuote>
      <AuthorQuote>{character}</AuthorQuote>
      <Input
        aria-label="Author Cita"
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa el nombre del autor"
      />
      <Button
        aria-label={InputValue ? "Obtener Cita" : "Obtener cita aleatoria"}
        onClick={onClickGetQuote}
      >
        {InputValue ? "Obtener Cita" : "Obtener cita aleatoria"}
      </Button>
      <Button aria-label="Borrar" onClick={onClickDelete} secondary={true}>
        Borrar
      </Button>
    </ContainerQuote>
  );
}
export default Quote;
