export interface INormalizedNews {
    id: number;
    title: string;
    description: string;
    date: number | string;
    isPremium: boolean;
    image: string;
    shortDescription?: string;
  }

  export interface SetInformationProps {
    setModal:(modal: INormalizedNews | null) => void;
    modal:INormalizedNews
  }