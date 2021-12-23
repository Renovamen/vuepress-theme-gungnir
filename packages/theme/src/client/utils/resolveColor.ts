// Converts hex to an RGB array
export const toRGB = (code: string) => {
  if (code.length === 4) {
    const codeReg = /\w+/.exec(code) as RegExpExecArray;
    for (const i in codeReg) codeReg[i] = codeReg[i] + codeReg[i];
    code = codeReg.join("");
  }
  const hex = /(\w{2})(\w{2})(\w{2})/.exec(code) as RegExpExecArray;
  return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
};

// Converts an RGB array to hex
export const toHex = (ary: number[]) => {
  const hexArray = ary.map((value) => {
    let hex = value.toString(16);
    hex = hex.length === 1 ? "0" + hex : hex;
    return hex;
  });
  return "#" + hexArray.join("");
};

export const colorIncrement = (start: string, end: string, range: number) => {
  const rgbStartColor = toRGB(start);
  return toRGB(end).map((value, i) => {
    return (value - rgbStartColor[i]) / range;
  });
};
