import { filterPosts, sortPostsByDate } from "@theme/utils/posts";

export default {
  computed: {
    $getAllPosts() {
      const {
        $tags: { list: articles }
      } = this;

      let posts = articles.reduce((allData, currentData) => {
        return [...allData, ...currentData.pages];
      }, []);

      posts = filterPosts(posts, false);
      sortPostsByDate(posts);

      return posts;
    },
    $showCatalog() {
      const {
        $themeConfig: { catalog: themeCatalog },
        $frontmatter: { catalog: pageCatalog }
      } = this;

      const headers = this.$page.headers || [];

      return (themeCatalog || pageCatalog) && headers.length > 0;
    }
  }
};
