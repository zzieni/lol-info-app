export type ChampionItem = {
  type: string;
  format: string;
  version: string;
  data: ChampionItemData;
};

export type ChampionItemData = {
  [key: string]: ChampionItemDetail;
};

export type ChampionItemDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionItemDetailImage;
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  spells: [];
  recommended: [];
};

export type ChampionItemDetailImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
