const readingTime = require("./reading-time");

const pagePathRegex = (pages, path, regularPath) => {
  const match =
    pages &&
    pages.some((p) => {
      const testRegex = new RegExp(p);
      return testRegex.test(path) || testRegex.test(regularPath);
    });
  return match;
};

module.exports = (options = {}) => ({
  extendPageData($page) {
    const { regularPath, path, frontmatter, _strippedContent } = $page;

    if (!_strippedContent) {
      return $page;
    }

    if (frontmatter && frontmatter.readingTime) {
      $page.readingTime = frontmatter.readingTime;
      return $page;
    }

    if (options.includes && options.includes.length > 0) {
      // `options.includes` is specified, ignores `options.excludes`
      const includePage = pagePathRegex(options.includes, path, regularPath);
      if (!includePage) return $page;
    } else {
      // `options.includes` is not specified
      const excludePage = pagePathRegex(options.excludes, path, regularPath);
      if (excludePage) return $page;
    }

    const stats = readingTime(_strippedContent, options);
    $page.readingTime = stats;

    return $page;
  }
});
