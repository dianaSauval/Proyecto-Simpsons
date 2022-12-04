import { useEffect, useState } from "react";
import { formatDate } from "../../hooks/formatDateHook";
import { formatStringHook } from "../../hooks/formatStringHook";
import { getNews } from "./fakeRest";
import Modal from "./Modal";
import {
  CardNews,
  DateCardNews,
  DescriptionCardNews,
  ImageCardNews,
  TitleCardNews,
  ContainerNews,
  ListNews,
  TitleNews,
  ReadButton,
} from "./styled";
import { INormalizedNews } from "./types";

const News = () => {
  const [news, setNews] = useState<INormalizedNews[]>([]);
  const [modal, setModal] = useState<INormalizedNews | null>(null);

  const getInformation = async () => {
    const res = await getNews();

    const data = res.map((n) => {
      const title = formatStringHook(n.title);
      const elapsedMinutes = formatDate(n.date);

      return {
        id: n.id,
        title,
        description: n.description,
        date: `Hace ${elapsedMinutes} minutos`,
        isPremium: n.isPremium,
        image: n.image,
        shortDescription: n.description.substring(0, 100),
      };
    });

    setNews(data);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <ContainerNews>
      <TitleNews>Noticias de los Simpsons</TitleNews>
      <ListNews>
        {news.map((n) => (
          <CardNews key={n.id}>
            <ImageCardNews src={n.image} />
            <TitleCardNews>{n.title}</TitleCardNews>
            <DateCardNews>{n.date}</DateCardNews>
            <DescriptionCardNews>{n.shortDescription}</DescriptionCardNews>
            <ReadButton onClick={() => setModal(n)}>Ver más</ReadButton>
          </CardNews>
        ))}
        {modal && <Modal modal={modal} setModal={setModal} />}
      </ListNews>
    </ContainerNews>
  );
};

export default News;
