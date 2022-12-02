import { useEffect, useState } from "react";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { getNews } from "./fakeRest";
import {
  CloseButton,
  CardModal,
  ContainerModal,
  DescriptionModal,
  ImageModal,
  TitleModal,
  CardNews,
  DateCardNews,
  DescriptionCardNews,
  ImageCardNews,
  TitleCardNews,
  ContainerNews,
  ListNews,
  TitleNews,
  ReadButton,
  SubscribeButton,
  ContainerText,
} from "./styled";
import { INormalizedNews } from "./types";



const News = () => {
  const [news, setNews] = useState<INormalizedNews[]>([]);
  const [modal, setModal] = useState<INormalizedNews | null>(null);

  useEffect(() => {
    const getInformation = async () => {
      const res = await getNews();

      const data = res.map((n) => {
        const title = n.title
          .split(" ")
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const now = new Date();
        const elapsedMinutes = Math.floor(
          (now.getTime() - n.date.getTime()) / 60000
        );

        return {
          id: n.id,
          title,
          description: n.description,
          date: `Hace ${elapsedMinutes} minutos`,
          isPremium: n.isPremium,
          image: n.image,
          descripcionCorta: n.description.substring(0, 100),
        };
      });

      setNews(data);
    };

    getInformation();
  }, []);

  return (
    <ContainerNews>
      <TitleNews>Noticias de los Simpsons</TitleNews>
      <ListNews>
        {news.map((n) => (
          <CardNews>
            <ImageCardNews src={n.image} />
            <TitleCardNews>{n.title}</TitleCardNews>
            <DateCardNews>{n.date}</DateCardNews>
            <DescriptionCardNews>
              {n.shortDescription}
            </DescriptionCardNews>
            <ReadButton onClick={() => setModal(n)}>Ver más</ReadButton>
          </CardNews>
        ))}
        {modal ? (
          modal.isPremium ? (
            <ContainerModal>
              <CardModal>
                <CloseButton onClick={() => setModal(null)}>
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
                        setModal(null);
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
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImageModal src={modal.image} alt="news-image" />
                <ContainerText>
                  <TitleModal>{modal.title}</TitleModal>
                  <DescriptionModal>{modal.description}</DescriptionModal>
                </ContainerText>
              </CardModal>
            </ContainerModal>
          )
        ) : null}
      </ListNews>
    </ContainerNews>
  );
};

export default News;
