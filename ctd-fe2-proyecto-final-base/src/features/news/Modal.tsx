import { CardModal, CloseButton, ContainerModal, ContainerText, DescriptionModal, ImageModal, SubscribeButton, TitleModal } from "./styled";
import { SetInformationProps } from "./types";
import { SuscribeImage, CloseButton as Close } from "../../assets";



const Modal = (props:SetInformationProps) => {  
    return (<>
        {props.modal?.isPremium ? (
            <ContainerModal>
              <CardModal>
                <CloseButton onClick={() => props.setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImageModal src={SuscribeImage} alt="mr-burns-excelent" />
                <ContainerText>
                  <TitleModal>Suscríbete a nuestro Newsletter</TitleModal>
                  <DescriptionModal>
                    Suscríbete a nuestro newsletter y recibe noticias de
                    nuestros personajes favoritos.
                  </DescriptionModal>
                  <SubscribeButton
                    onClick={() =>
                      setTimeout(() => {
                        alert("Suscripto!");
                        props.setModal(null);
                      }, 1000)
                    }
                  >
                    Suscríbete
                  </SubscribeButton>
                </ContainerText>
              </CardModal>
            </ContainerModal>
          ) : (
            <ContainerModal>
              <CardModal>
                <CloseButton onClick={() => props.setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImageModal src={props.modal?.image} alt="news-image" />
                <ContainerText>
                  <TitleModal>{props.modal?.title}</TitleModal>
                  <DescriptionModal>{props.modal?.description}</DescriptionModal>
                </ContainerText>
              </CardModal>
            </ContainerModal>
          )}
        </>
        
    );
  };
  
  export default Modal;
  