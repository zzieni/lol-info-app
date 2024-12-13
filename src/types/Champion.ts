// 챔피언 데이터 타입 지정

export type Champion = {
  type: string;
  format: string;
  version: string;
  data: ChampionList;
};

export type ChampionList = {
  [key: string]: ChampionListItem;
};

export type ChampionListItem = {
  // 동적 타입 (어떤 값이 얼마나 들어올지 몰라서 )
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImage;
  tags: ChampionTages;
  partype: string;
  stats: ChampionStats;
};

export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ChampionTages = string[];

export type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};
