import { useState } from "react";
import { NamesSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioButton,
  BioContainer,
  BioDescription,
  BioImg,
  BioName,
  ContainerButtons,
} from "./styled";

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NamesSimpsons.BART]);

  const onClick: (nombre: NamesSimpsons) => void = (nombre) =>
    setBioActive(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BioButton
        isActive={bioActive.id === nombre}
        key={nombre as string}
        onClick={() => onClick(nombre as NamesSimpsons)}
      >
        {nombre}
      </BioButton>
    ));
  };

  return (
    <BioContainer>
      <ContainerButtons>{crearBotones()}</ContainerButtons>
      <div>
        <div>
          <BioImg src={bioActive.image} alt={bioActive.name} />
        </div>
        <div>
          <BioName>{bioActive.name}</BioName>
          <BioDescription>{bioActive.description}</BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
