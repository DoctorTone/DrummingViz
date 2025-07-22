import { RESOLUTIONS, CONFIGURATIONS, CONFIG_TYPE } from "../state/Config";

export const getScreenConfiguration = (width: number, height: number) => {
  if (width <= RESOLUTIONS.SMALL) {
    return CONFIGURATIONS[CONFIG_TYPE.SMALL];
  }

  if (width <= RESOLUTIONS.MEDIUM && width > height) {
    return CONFIGURATIONS[CONFIG_TYPE.LANDSCAPE];
  }

  return CONFIGURATIONS[CONFIG_TYPE.SMALL];
};
