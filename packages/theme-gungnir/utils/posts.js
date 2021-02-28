import { dateFormat, compareDate } from "@theme/utils/time";

export function getPostsByYear(pages) {
  const formatPages = {};
  const formatPagesArr = [];
  pages = filterPosts(pages, true);

  for (let i = 0, length = pages.length; i < length; i++) {
    const page = pages[i];
    const pageDateYear = dateFormat(page.frontmatter.date, "year");
    if (formatPages[pageDateYear]) formatPages[pageDateYear].push(page);
    else {
      formatPages[pageDateYear] = [page];
    }
  }

  for (const key in formatPages) {
    const data = formatPages[key];
    sortPostsByDate(data);
    formatPagesArr.unshift({
      year: key,
      data
    });
  }

  return formatPagesArr;
}

export function filterPosts(posts, isGroupedByYear) {
  posts = posts.filter((item, index) => {
    const {
      title,
      frontmatter: { home, date, publish }
    } = item;
    // deal with duplicated tags
    if (posts.indexOf(item) !== index) {
      return false;
    } else {
      const someConditions =
        home == true || title == undefined || publish === false;
      const boo =
        isGroupedByYear === true
          ? !(someConditions || date === undefined)
          : !someConditions;
      return boo;
    }
  });
  return posts;
}

export function sortPostsByDate(posts) {
  posts.sort((prev, next) => {
    return compareDate(prev, next);
  });
}
