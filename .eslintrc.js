module.exports = {
  root: true,
  ignorePatterns: [
    "projects/**/*",
  ],
  overrides: [
    {
      files: [ "*.ts" ],
      parserOptions: {
        project: [ "tsconfig.json" ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "prettier"
      ],
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "acg",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "acg",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      files: [ "*.html" ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      rules: {}
    }
  ]
}
