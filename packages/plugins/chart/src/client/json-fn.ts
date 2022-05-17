const parse = (str: string) => {
  return JSON.parse(str, (key, value) => {
    if (typeof value !== "string" || value.length < 8) return value;

    const prefix = value.substring(0, 8);

    if (prefix !== "function") return value;

    /* eslint-disable-next-line @typescript-eslint/no-implied-eval */
    return new Function("return (" + value + ")")();
  });
};

export default {
  parse
};
