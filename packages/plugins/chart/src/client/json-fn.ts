/* eslint-disable no-eval */

const parse = (str: string) => {
  return JSON.parse(str, function (key, value) {
    if (typeof value !== "string" || value.length < 8) {
      return value;
    }

    const prefix = value.substring(0, 8);

    if (prefix === "function") {
      return eval("(" + value + ")");
    } else if (prefix === "_PxEgEr_") {
      return eval(value.slice(8));
    } else if (prefix === "_NuFrRa_") {
      return eval(value.slice(8));
    }

    return value;
  });
};

export default {
  parse
};
