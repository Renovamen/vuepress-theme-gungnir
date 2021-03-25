export function tagCloud(tagList) {
  const tagOpts = {
    color: { start: "#a5a5e4", end: "#4388c4" }
  };

  if (tagList.length == 0) return [];

  tagList.sort((prev, next) => {
    return next.pages.length - prev.pages.length;
  });
  const lowest = tagList[tagList.length - 1].pages.length;
  const highest = tagList[0].pages.length;
  const range = Math.max(highest - lowest, 1);

  const colorIncr = colorIncrement(tagOpts.color, range);

  for (let item of tagList) {
    const weighting = item.pages.length - lowest;
    item.tagColor = tagColor(tagOpts.color, colorIncr, weighting);
  }
  return tagList;
}

// Converts hex to an RGB array
const toRGB = (code) => {
  if (code.length == 4) {
    code = /\w+/.exec(code);
    for (let i in code) code[i] = code[i] + code[i];
    code = code.join("");
  }
  const hex = /(\w{2})(\w{2})(\w{2})/.exec(code);
  return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
};

// Converts an RGB array to hex
const toHex = (ary) => {
  ary = ary.map((value) => {
    let hex = value.toString(16);
    hex = hex.length == 1 ? "0" + hex : hex;
    return hex;
  });
  return "#" + ary.join("");
};

const colorIncrement = (color, range) => {
  const rgbStartColor = toRGB(color.start);
  return toRGB(color.end).map((value, i) => {
    return (value - rgbStartColor[i]) / range;
  });
};

const tagColor = (color, increment, weighting) => {
  const rgb = toRGB(color.start).map((value, i) => {
    let ref = Math.round(value + increment[i] * weighting);
    if (ref > 255) ref = 255;
    else if (ref < 0) ref = 0;
    return ref;
  });
  return toHex(rgb);
};
