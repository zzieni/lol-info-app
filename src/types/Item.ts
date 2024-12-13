// 아이템 목록 데이터 타입 정의

export type Item = {
  type: string;
  version: string;
  basic: ItemBasics;
  data: ItemDatas;
  groups: ItemGroups;
  tree: ItemTrees;
};

// basic
export type ItemBasics = {};

// data
export type ItemDatas = {
  [key: string]: ItemData;
};

export type ItemData = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: ItemDataInto;
  image: ItemDataImage;
  gold: ItemDataGold;
  tags: ItemDataTag;
  maps: ItemDataMaps;
  stats: ItemDataStats;
};

export type ItemDataInto = string[];

export type ItemDataImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ItemDataGold = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};

export type ItemDataTag = string[];

export type ItemDataMaps = {
  [key: string]: boolean;
};

export type ItemDataStats = {
  [key: string]: number;
};
// groups
export type ItemGroups = [];

// tree
export type ItemTrees = [];
