import { CompleteCollection, Project } from "./types";
import * as CollectionApi from "../api/collection.api";
import { getProject } from "./factories";

export const getCollection: (
  id: number,
  username: string,
) => Promise<CompleteCollection> = (collectionId, username) =>
  CollectionApi.getCollection(collectionId, username).then(({ name }) =>
    CollectionApi.getAllCollectionProjects(collectionId).then((projects) => ({
      id: collectionId,
      name,
      projects: projects.map((project) => getProject(project)),
      updatedAtUtc: new Date(),
    })),
  );

const random = (min: number, max: number) => min + Math.random() * (max - min);

export const getRandomProject: (collection: CompleteCollection) => Project = ({
  projects,
}) => projects[random(0, projects.length)];
