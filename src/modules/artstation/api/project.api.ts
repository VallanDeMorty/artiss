import { Api } from "./api";

export interface ProjectResponse {
  adminAdultContent: boolean;
  adultContent: boolean;
  assets: AssetResponse[];
  categories: Array<{ name: string; id: number }>;
  commentsCount: number;
  coverUrl: string;
  createdAt: Date;
  description: string;
  descriptionHtml: string;
  editorPick: boolean;
  hashId: string;
  hideAsAdult: boolean;
  id: number;
  likesCount: number;
  medium: { name: string; id: number };
  mediums: Array<{ name: string; id: number }>;
  permalink: string;
  publishedAt: Date;
  slug: string;
  softwareItems: SoftwareItemResponse[];
  suppressed: boolean;
  tags: string[];
  title: string;
  updatedAt: Date;
  user: UserResponse;
  userId: number;
  viewsCount: number;
  visible: boolean;
  visibleOnArtstation: boolean;
}

export interface AssetResponse {
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

interface SoftwareItemResponse {
  iconUrl: string;
  name: string;
}

interface UserResponse {
  blocked: boolean;
  followed: boolean;
  followingBack: boolean;
  fullName: string;
  headline: string;
  id: number;
  isOrganizationOwner: boolean;
  isPlusMember: boolean;
  isStaff: boolean;
  largeAvatarUrl: string;
  mediumAvatarUrl: string;
  permalink: string;
  proMember: boolean;
  smallCoverUrl: string;
  username: string;
}

export const getProject = (id: number) =>
  Api.get<ProjectResponse>(`projects/${id}.json`).then(({ data }) => data);
