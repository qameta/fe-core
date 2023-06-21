/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
  plugins: [
    "eslint-plugin-jest-dom",
    "eslint-plugin-react",
    "eslint-plugin-testing-library",
    "react-hooks",
  ],
  rules: {
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
