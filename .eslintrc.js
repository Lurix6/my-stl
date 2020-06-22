module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["airbnb", "prettier"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "max-len": ["error", { "code": 100 }],
    "import/no-unresolved": 0,
    "no-plusplus": 0,
    "react/jsx-props-no-spreading": 0,
    "func-names": 0,
    "no-case-declarations": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/destructuring-assignment": [2, "always", { "ignoreClassFields": true }],
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0
  }
}
