const rules = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true },
    "impliedStrict": true,
    "allowImportExportEverywhere": false
  },
  "plugins": [
    "babel",
    "react",
    "json"
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "15.0",
      "flowVersion": "0.53"
    },
    "propWrapperFunctions": ["forbidExtraProps"]
  },
  "rules": {
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-extra-parens": [
      "error",
      "all",
      {
        "conditionalAssign": false,
        "nestedBinaryExpressions": false
      }
    ],
    "no-prototype-builtins": "error",
    "require-atomic-updates": "error",
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": ["error", 10],
    "consistent-return": "error",
    "curly": "error",
    "default-case": "error",
    "dot-notation": "error",
    "dot-location": ["error", "property"],
    "eqeqeq": ["error", "always"],
    "guard-for-in": "error",
    "max-classes-per-file": ["warn", 1],
    "no-alert": "warn",
    "no-caller": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    // "no-magic-numbers": `warn`,
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "warn",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-catch": "warn",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "require-await": "error",
    "wrap-iife": ["error", "any"],
    "yoda": "error",

    "strict": "error",

    "no-label-var": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-use-before-define": "error",

    "callback-return": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-buffer-constructor": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-sync": ["error", { "allowAtRootLevel": true }],

    // 'array-bracket-newline': ['error', 'consistent'],
    "array-bracket-newline": ["error", { "multiline": true }],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    // 'array-element-newline': ['error', { "multiline": true }],
    "block-spacing": "error",
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
    "camelcase": "error",
    // 'capitalized-comments': ['error'],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": "error",
    "consistent-this": ["error", "that"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-name-matching": "error",
    // 'func-names': ['error', 'always'], //questionable options, enable if need function name in stack trace
    // 'func-style': ['error', 'expression'/'declaration'],
    "function-paren-newline": ["error", "consistent"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": [
      "error", {
        "mode": "strict",
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error", {
        "before": true,
        "after": true
      }
    ],
    // 'line-comment-position': ['error', { 'position': 'beside','above' }],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": true,
        "afterBlockComment": false,
        "beforeLineComment": true,
        "afterLineComment": false,
        "allowBlockStart": true,
        "allowBlockEnd": true,
        "allowObjectStart": true,
        "allowObjectEnd": true,
        "allowArrayStart": true,
        "allowArrayEnd": true,
        "allowClassStart": true,
        "allowClassEnd": true
      }
    ],
    "lines-between-class-members": ["error", "always"/* , {'exceptAfterSingleLine': true}*/],
    "max-depth": ["error", 4],
    "max-len": [
      "error", {
        "code": 100,
        "tabWidth": 2,
        "comments": 150,
        // "ignorePattern": true,
        // "ignoreComments" true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "max-lines": [
      "error", {
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-lines-per-function": [
      "error", {
        "max": 50,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-nested-callbacks": ["error", { "max": 4 }],
    "max-params": ["warn", { "max": 5 }],
    "max-statements": ["warn", { "max": 50 }],
    "max-statements-per-line": ["error", { "max": 3 }],
    "multiline-comment-style": ["error", "separate-lines"],
    "multiline-ternary": ["error", "never"],
    // 'new-cap': 'error',
    "new-parens": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 4 }],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    // 'no-tabs': 'error',
    // 'no-ternary': 'error',
    "no-trailing-spaces": "error",
    // 'no-underscore-dangle': 'error',
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "beside"],
    "object-curly-newline": ["error", { "consistent": true }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],

    // 'one-var': ['error', 'consecutive'],
    // 'one-var-declaration-per-line': ['error', 'initializations'],
    "operator-assignment": ["error", "never"],
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", { "blocks": "never" }],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": ["import", "cjs-import"], "next": "*" },
      { "blankLine": "any", "prev": ["import", "cjs-import"], "next": ["import", "cjs-import"] },

      { "blankLine": "always", "prev": "*" , "next": ["var", "let", "const"] },
      { "blankLine": "always", "prev": ["var", "let", "const"], "next": "*" },
      { "blankLine": "any", "prev": ["var", "let", "const"], "next": ["var", "let", "const"] },
      {
        "blankLine": "always",
        "prev": ["class", "directive", "multiline-block-like", "throw", "if", "while", "for", "do", "switch", "function"],
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": ["class", "cjs-export", "try", "if", "while", "for", "do", "switch", "function"]
      },
      {
        "blankLine": "any",
        "prev": ["if", "while", "for"],
        "next": ["if", "while", "for"]
      }
    ],
    "prefer-object-spread": "error",

    "quote-props": [
      "error", "consistent-as-needed", {
        "keywords": false,
        "numbers": true,
        "unnecessary": true
      }
    ],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "semi-style": ["error", "last"],
    // 'sort-keys': ['error', 'asc', { 'natural': true }], //uncomment if needed
    // 'sort-vars': 'error', //uncomment if needed
    "space-before-blocks": ["error"],
    "space-before-function-paren": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always", { "exceptions": ["*"] }],
    "switch-colon-spacing": "error",
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "wrap-regex": "error",

    // "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "generator-star-spacing": ["error", { "before": true, "after": false }],
    "no-confusing-arrow": "error",
    "no-duplicate-imports": ["error", { "includeExports": true }],
    "no-useless-computed-key": "error",
    "no-useless-constructor": "warn",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": ["error", { "destructuring": "all" }],
    // 'prefer-destructuring': ['error', {
    //   'array': true,
    //   'object': true
    // }],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  }
};

module.exports = rules;