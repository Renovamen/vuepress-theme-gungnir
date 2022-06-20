module.exports = {
  root: true,
  extends: "vuepress",
  overrides: [
    {
      files: ["*.ts", "*.vue"],
      extends: "vuepress-typescript",
      parserOptions: {
        project: ["tsconfig.json"]
      },
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-types": "off",
        "import/no-extraneous-dependencies": "off",
        "array-callback-return": "off",
        "vue/no-v-html": "off",
        "vue/multi-word-component-names": "off"
      }
    },
    {
      files: ["*.vue"],
      rules: {
        "vue/component-tags-order": [
          "error",
          {
            order: ["template", "script", "style"]
          }
        ]
      }
    },
    {
      files: ["**/client/config.ts"],
      rules: {
        "vue/match-component-file-name": "off"
      }
    }
  ]
};
