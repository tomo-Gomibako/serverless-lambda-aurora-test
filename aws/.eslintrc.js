module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    'standard'
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "aws/tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false
    }],
    'arrow-parens': ['error', 'always'],
    'require-await': 'error',
  },
  "settings": {
    "import/resolver": {
      typescript: {}
    }
  }
};
