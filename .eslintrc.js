module.exports = {
    "extends": "airbnb",
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "import/no-unresolved": [2, { commonjs: true, amd: true }],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }]
    },
    "env": {
        "browser": true,
        "node": true
    },
    "settings": {
        "import/resolver": "node"
    }
};
