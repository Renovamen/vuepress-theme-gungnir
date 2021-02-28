const getNumCN = function (text) {
  return (text.match(/[\u4E00-\u9FA5]/g) || []).length;
};

const getNumEN = function (text) {
  return (
    text
      .replace(/[\u4E00-\u9FA5]/g, "")
      .match(
        /[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g
      ) || []
  ).length;
};

const excludeCodeBlock = function (text) {
  return text.replace(/```[\s\S]*?```/g, "");
};

const excludeTexBlock = function (text) {
  return text.replace(/\$\$[\s\S]*?\$\$/g, "");
};

const readingTime = function (text, options) {
  options = options || {};

  // use default values if necessary
  options.wordsPerMinuteCN = options.wordsPerMinuteCN || 300;
  options.wordsPerMinuteEN = options.wordsPerMinuteEN || 160;

  // exclude all content inside code blocks
  if (options.excludeCodeBlock) text = excludeCodeBlock(text);
  // exclude all content inside tex blocks
  if (options.excludeTexBlock) text = excludeTexBlock(text);

  // number of chinese words and english words
  const cntCN = getNumCN(text || ""),
    cntEN = getNumEN(text || "");

  // compute reading time
  var minutes =
    cntCN / options.wordsPerMinuteCN + cntEN / options.wordsPerMinuteEN;
  minutes = minutes < 1 ? 1 : Math.ceil(minutes.toFixed(2));

  return {
    minutes: minutes,
    words: cntCN + cntEN
  };
};

module.exports = readingTime;
