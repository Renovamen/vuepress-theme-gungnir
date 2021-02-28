<template>
  <footer class="page-edit">
    <div v-if="editLink" class="edit-link">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">
        <v-icon name="fa-pencil-alt" />
        {{ editLinkText }}
      </a>
    </div>

    <div v-if="lastUpdated" class="last-updated">
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
  </footer>
</template>

<script>
import isNil from "lodash/isNil";
import { endingSlashRE, outboundRE } from "@theme/utils/utils";

export default {
  name: "PageEdit",

  computed: {
    lastUpdated() {
      return this.$page.lastUpdated;
    },

    lastUpdatedText() {
      return this.$themeLocales.lastUpdated;
    },

    editLink() {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink;

      const {
        repo,
        docsDir = "",
        docsBranch = "main",
        docsRepo = repo
      } = this.$site.themeConfig;

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        );
      }
      return null;
    },

    editLinkText() {
      return this.$themeLocales.editLinkText;
    }
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(docsRepo)) {
        const base = docsRepo;
        return (
          base.replace(endingSlashRE, "") +
          `/src` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const gitlab = /gitlab.com/;
      if (gitlab.test(docsRepo)) {
        const base = docsRepo;
        return (
          base.replace(endingSlashRE, "") +
          `/-/edit` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
          path
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;
      return (
        base.replace(endingSlashRE, "") +
        "/edit" +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
        path
      );
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto

  .edit-link
    display inline-block
    a
      color var(--accent-color)
      margin-right 0.25rem
      &:hover
        text-decoration underline
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color var(--text-color)
    .time
      font-weight 400
      color var(--text-color-sub)

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom 0.5rem
    .last-updated
      font-size 0.8em
      float none
      text-align left
</style>
