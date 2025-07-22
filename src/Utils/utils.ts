import { RESOLUTIONS, CONFIGURATIONS, CONFIG_TYPE } from "../state/Config";

export const getScreenConfiguration = (width: number, height: number) => {
  if (width <= RESOLUTIONS.SMALL) {
    return CONFIGURATIONS[CONFIG_TYPE.SMALL];
  }

  if (width <= RESOLUTIONS.MEDIUM && width > height) {
    return CONFIGURATIONS[CONFIG_TYPE.LANDSCAPE];
  }

  if (width <= RESOLUTIONS.LARGE && width < height) {
    return CONFIGURATIONS[CONFIG_TYPE.PORTRAIT];
  }

  if (width <= RESOLUTIONS.LARGE) {
    return CONFIGURATIONS[CONFIG_TYPE.LARGE];
  }

  if (width <= RESOLUTIONS.X_LARGE) {
    return CONFIGURATIONS[CONFIG_TYPE.TABLET];
  }

  return CONFIGURATIONS[CONFIG_TYPE.SMALL];
};
