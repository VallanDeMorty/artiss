export type CacheState = {
  [id: string]: object | undefined;
};

export type BackgroundDisplay = {
  blur: number;
  luminosity: number;
};

type PluginState<Display> = {
  id: string;
  /**
   * May not exactly match plugin keys.
   * Keys of removed plugins may still exist in a browser's storage for instance
   */
  key: string;
  active: boolean;
  display: Display;
};

export type BackgroundState = PluginState<BackgroundDisplay>;

export type DataState = {
  backgrounds: BackgroundState[];
  data: {
    [id: string]: object;
  };
  locale?: string;
  timeZone?: string;
};

export type UiState = {
  focus: boolean;
  loaders: number;
  settings: boolean;
  storeError?: Error;
};

export type RootState = {
  // This is not synced
  cache: CacheState;

  // This is synced
  data: DataState;

  // Controlled the user interface
  ui: UiState;
};
