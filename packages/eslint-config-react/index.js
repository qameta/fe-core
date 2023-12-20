/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [],
  plugins: ["eslint-plugin-react", "react-hooks"],
  rules: {
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  overrides: [
    {
      files: ["**/*.{spec,test}.{ts,tsx,js,jsx}"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
      plugins: ["eslint-plugin-jest-dom", "eslint-plugin-testing-library"],
    },
  ],
};
