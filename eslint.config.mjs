import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/**
 * `eslint-config-next` v16+ already exports ESLint "flat config" arrays.
 * Avoid `FlatCompat.extends("next")` here — it reintroduces legacy `extends`
 * resolution and can trigger circular config graphs with the React plugin stack.
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  {
    files: [
      "src/**/*.{js,jsx,ts,tsx,mjs,cjs}",
    ],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["node_modules", "src/"],
        },
      },
    },
    rules: {
      "import/extensions": ["error", "ignorePackages", {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }],

      indent: "off",

      "jsx-a11y/label-has-associated-control": ["error", {
        required: {
          some: ["nesting", "id"],
        },
      }],

      "jsx-a11y/label-has-for": ["error", {
        required: {
          some: ["nesting", "id"],
        },
      }],

      "max-len": ["error", {
        code: 130,
        ignorePattern: "d=\"([\\s\\S]*?)\"",
      }],

      "no-use-before-define": "off",
      "react/no-unknown-property": "off",

      "react/jsx-filename-extension": [1, {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }],

      "react/jsx-pascal-case": "off",
    },
  },
];

export default eslintConfig;