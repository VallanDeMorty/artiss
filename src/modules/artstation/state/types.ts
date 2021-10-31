export type State = {
  currentCollection?: Collection;
  currentProject?: Project;
};

export type Collection = {
  id: number;
  name: string;
};

export type CompleteCollection = Collection & {
  projects: Project[];
  updatedAtUtc: Date;
};

export type Project = {
  assets: Asset[];
  categories: Category[];
  coverUrl: string;
  description: string;
  id: number;
  likesCount: number;
  permalink: string;
  softwareItems: SoftwareItem[];
  tags: string[];
  title: string;
  updatedAt: Date;
  user: User;
  viewsCount: number;
};

export type Category = {
  id: number;
  name: string;
};

export interface Asset {
  assetType: string;
  hasEmbeddedPlayer: boolean;
  hasImage: boolean;
  height: number;
  id: number;
  imageUrl: string;
  position: number;
  title: null | string;
  titleFormatted: string;
  viewportConstraintType: string;
  width: number;
}

interface SoftwareItem {
  iconUrl: string;
  name: string;
}

interface User {
  fullName: string;
  headline: string;
  id: number;
  largeAvatarUrl: string;
  mediumAvatarUrl: string;
  permalink: string;
  smallCoverUrl: string;
  username: string;
}
