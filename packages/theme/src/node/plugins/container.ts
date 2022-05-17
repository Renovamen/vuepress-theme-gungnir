import type { Plugin } from "@vuepress/core";
import { containerPlugin } from "@vuepress/plugin-container";
import type { ContainerPluginOptions } from "@vuepress/plugin-container";
import type {
  GungnirThemeContainerOptions,
  GungnirThemeData
} from "../../shared";

const defaultSVGs = {
  info: `<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z" style="fill:#157ffb;fill-rule:nonzero" transform="translate(-1.257 -1.257) scale(1.0582)"/></svg>`,
  tip: `<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.178)"/></svg>`,
  warning: `<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z" style="fill:#f3cc2e;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.18)"/></svg>`,
  danger: `<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M297.64 123.31C133.55 123.31 0 256.83 0 420.94c0 164.11 133.55 297.64 297.64 297.64 164.09 0 297.64-133.52 297.64-297.64 0-164.12-133.55-297.63-297.64-297.63Zm107.8 333.25H189.83c-19.541 0-35.62-16.079-35.62-35.62 0-19.541 16.079-35.62 35.62-35.62h215.61c19.541 0 35.62 16.079 35.62 35.62 0 19.541-16.079 35.62-35.62 35.62Z" style="fill:#f55;fill-rule:nonzero" transform="matrix(.042 0 0 .042 0 -5.179)"/></svg>`
};

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For custom containers default title
 */
export const resolveContainerPluginOptions = (
  localeOptions: GungnirThemeData,
  type: "info" | "tip" | "warning" | "danger"
): ContainerPluginOptions => {
  const locales = Object.entries(localeOptions.locales || {}).reduce(
    (result, [key, value]) => {
      result[key] = {
        defaultInfo: value?.[type] ?? localeOptions[type]
      };
      return result;
    },
    {}
  );

  return {
    type,
    locales,
    before: (info: string): string =>
      `<div class="custom-container ${type}">${
        (defaultSVGs[type] || "") +
        (info ? `<p class="custom-container-title">${info}</p>` : "")
      }\n`,
    after: (): string => "</div>\n"
  };
};

const getContainerDslValue = (
  target: string,
  start: string,
  end: string
): string => {
  if (typeof target !== "string" || target === "") return "";
  const startIndex = target.indexOf(start);
  const endIndex = target.lastIndexOf(end);
  if (startIndex === -1 || endIndex === -1) return "";
  return target.substring(startIndex + 1, endIndex);
};

/**
 * For link card
 */
export const resolveContainerPluginOptionsForLink = (
  options?: boolean | { siteDomain?: boolean }
): ContainerPluginOptions => ({
  type: "link",
  before: (dsl) => {
    let context = dsl;
    const title = getContainerDslValue(context, "[", "]");
    context = context.replace(`[${title}]`, "");
    const link = getContainerDslValue(context, "(", ")");
    context = context.replace(`(${link})`, "");
    const identifier = getContainerDslValue(context, "{", "}");
    const isImgae = identifier.includes("/");
    const siteDomain = typeof options === "object" ? options.siteDomain : true;
    return `
    <LinkCard
      title="${title}"
      link="${link}"
      icon="${isImgae ? "" : identifier}"
      image="${!isImgae ? "" : identifier}"
      siteDomain="${siteDomain}"
      >`;
  },
  after: () => "</LinkCard>\n"
});

export const getContainerPlugin = (
  localeOptions: GungnirThemeData,
  options?: GungnirThemeContainerOptions
): (Plugin | [])[] => [
  options?.info !== false
    ? containerPlugin(resolveContainerPluginOptions(localeOptions, "info"))
    : [],
  options?.tip !== false
    ? containerPlugin(resolveContainerPluginOptions(localeOptions, "tip"))
    : [],
  options?.warning !== false
    ? containerPlugin(resolveContainerPluginOptions(localeOptions, "warning"))
    : [],
  options?.danger !== false
    ? containerPlugin(resolveContainerPluginOptions(localeOptions, "danger"))
    : [],
  options?.details !== false
    ? containerPlugin({
        type: "details",
        before: (info) =>
          `<details class="custom-container details">${
            info ? `<summary>${info}</summary>` : ""
          }\n`,
        after: () => "</details>\n"
      })
    : [],
  options?.codeGroup !== false
    ? containerPlugin({
        type: "code-group",
        before: () => `<CodeGroup>\n`,
        after: () => "</CodeGroup>\n"
      })
    : [],
  options?.codeGroupItem !== false
    ? containerPlugin({
        type: "code-group-item",
        before: (info) => `<CodeGroupItem title="${info}">\n`,
        after: () => "</CodeGroupItem>\n"
      })
    : [],
  options?.danger !== false
    ? containerPlugin(resolveContainerPluginOptionsForLink(options?.link))
    : []
];
