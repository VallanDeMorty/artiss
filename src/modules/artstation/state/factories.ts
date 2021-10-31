import { ProjectResponse } from "../api/project.api";
import { Project } from "./types";

export const getProject: (project: ProjectResponse) => Project = ({
  assets,
  categories,
  coverUrl,
  description,
  id,
  likesCount,
  permalink,
  softwareItems,
  tags,
  title,
  updatedAt,
  user,
  viewsCount,
}) => ({
  assets: assets.map((asset) => ({ ...asset })),
  categories: categories.map((category) => ({ ...category })),
  coverUrl,
  description,
  id,
  likesCount,
  permalink,
  softwareItems: softwareItems.map((software) => ({ ...software })),
  tags,
  title,
  updatedAt,
  user: { ...user },
  viewsCount,
});
