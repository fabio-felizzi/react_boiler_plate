module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",    
    "rules": {
        "indent": ["error", 4],
        "arrow-body-style": ["warn", "as-needed"],
        "no-unused-expressions": ["error", {"allowTernary": true}],
        "no-underscore-dangle": [0],
        "max-len": [0, { "ignoreUrls": true }],
        "consistent-return": ["warn"],
        "class-methods-use-this": ["warn"],
        "react/jsx-indent" : ["error", 4],
        "react/jsx-indent-props" : [4, 4],
        "react/prefer-stateless-function": "off",
        "react/no-array-index-key": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
        "class-methods-use-this": "off",
        "import/no-unresolved": "off",
        "no-unused-vars": ["error", { "ignoreRestSiblings": true, "varsIgnorePattern": "[_]" }],
        "jsx-a11y/no-noninteractive-element-interactions": ["warn"],
        "linebreak-style": "off",
        "react/jsx-one-expression-per-line": "off"
    },
    "env": {
        "browser": true,
        "jest": true
    },
    "globals": {
        "config": true,
        "logger": true,
        "before": true,
        "scope": true,
    },
};
