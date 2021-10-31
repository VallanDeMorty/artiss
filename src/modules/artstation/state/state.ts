import { createMachine, assign } from "xstate";
import { getCollection, getRandomProject } from "./commands";

interface Context {
  activeProject?: any;
  collection?: any;
  collectionId?: number;
  username?: string;
}

const artstationPresenter = createMachine<Context>({
  id: "artstation",
  initial: "empty",
  context: {},
  states: {
    empty: {
      on: {
        LOAD: {
          target: "loading",
          actions: assign({
            collectionId: (_, { data }) => data.collectionId,
            username: (_, { data }) => data.username,
          }),
        },
      },
    },
    loading: {
      invoke: {
        id: "getCollection",
        src: ({ collectionId, username }, _) =>
          getCollection(collectionId!, username!),
        onDone: {
          target: "loaded",
          actions: assign({
            collection: (_, { data }) => data,
          }),
        },
        onError: "failure",
      },
    },
    loaded: {
      always: [
        {
          target: "selected",
          actions: assign({
            activeProject: ({ collection }, _) => getRandomProject(collection),
          }),
        },
      ],
    },
    selected: {
      on: {
        RESELECT: {
          target: "selected",
          actions: assign({
            activeProject: ({ collection }, _) => getRandomProject(collection),
          }),
        },
        RELOAD: "loading",
        CLEAR: {
          target: "empty",
          actions: assign({
            activeProject: (context, event) => null,
            collection: (context, event) => null,
            collectionId: (context, event) => undefined,
            username: (context, event) => undefined,
          }),
        },
      },
    },
    failure: {
      on: {
        RETRY: {
          target: "empty",
          actions: assign({
            collection: (context, event) => null,
            activeProject: (context, event) => null,
          }),
        },
      },
    },
  },
});
