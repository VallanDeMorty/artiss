import { v4 as generateId } from "uuid";

import { Actions } from "../actions";
import { DataState } from "./types";

export const initialState: DataState = {
  backgrounds: [
    {
      id: generateId(),
      key: "background/unsplash",
      active: true,
      display: { luminosity: -0.1, blur: 0 },
    },
  ],
  data: {},
};

export function data(state = initialState, action: Actions): DataState {
  switch (action.type) {
    case "RESET_STORE":
      return action.data.state || initialState;

    case "SET_BACKGROUND":
      return {
        ...state,
        backgrounds: [
          {
            id: generateId(),
            key: action.data.key,
            active: true,
            display: { luminosity: 0, blur: 0 },
          },
        ],
      };

    case "SET_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          [action.data.id]: action.data.data,
        },
      };

    case "SET_BACKGROUND_DISPLAY":
      return {
        ...state,
        backgrounds: state.backgrounds.map((plugin) =>
          plugin.active
            ? {
                ...plugin,
                display: { ...plugin.display, ...action.data.display },
              }
            : plugin,
        ),
      };

    case "SET_LOCALE":
      return {
        ...state,
        locale: action.data.locale,
      };

    case "SET_TIME_ZONE":
      return {
        ...state,
        timeZone: action.data.timeZone,
      };

    default:
      return state;
  }
}
