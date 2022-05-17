import type { Plugin } from "@vuepress/core";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";

export const getMediumZoomPlugin = (mediumZoom?: boolean): Plugin | [] => {
  if (mediumZoom === false) return [];

  return mediumZoomPlugin({
    selector:
      ".theme-gungnir-content > img, .theme-gungnir-content :not(a) > img",
    zoomOptions: {},
    // should greater than page transition duration
    delay: 300
  });
};
