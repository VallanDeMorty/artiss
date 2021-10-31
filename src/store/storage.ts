import localForage from "localforage";
import { syncStorage } from "redux-persist-webextension-storage";

export const cacheStorage = localForage.createInstance({
  name: "artiss",
  driver: localForage.INDEXEDDB,
  storeName: "cache",
});

export const dataStorage = syncStorage;
