const readingTime = require("./reading-time");

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

    const excludePage =
      options.excludes &&
      options.excludes.some((p) => {
        const testRegex = new RegExp(p);
        return testRegex.test(path) || testRegex.test(regularPath);
      });

    if (excludePage) {
      return $page;
    }

    var stats = readingTime(_strippedContent, options);
    $page.readingTime = stats;

    return $page;
  }
});
