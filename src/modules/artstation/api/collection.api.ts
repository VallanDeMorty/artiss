import { Api } from "./api";
import { ProjectResponse } from "./project.api";

export interface CollectionResponse {
  activeProjectsCount: number;
  id: number;
  isPrivate: boolean;
  microSquareImageUrl: string;
  name: string;
  projectsCount: number;
  smallSquareImageUrl: string;
  userId: number;
}

export const getCollection = (id: number, username: string) =>
  Api.get<CollectionResponse>(
    `/collections/${id}.json?username=${username}`,
  ).then(({ data }) => data);

export const getAllCollectionProjects = (collectionId: number) => {
  const fetchProjects = (pageNumber: number): Promise<ProjectResponse[]> =>
    getCollectionProjects(collectionId, pageNumber).then((page) => {
      if (page.data.length === 0) {
        return [];
      }

      return fetchProjects(pageNumber + 1).then((projects) => [
        ...projects,
        ...page.data,
      ]);
    });

  return fetchProjects(1);
};

const getCollectionProjects = (id: number, page: number) =>
  Api.get<{ data: ProjectResponse[]; totalCount: number }>(
    `/collections/${id}/projects.json?collection_id=${id}&page=${page}`,
  ).then(({ data }) => data);
