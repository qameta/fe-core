module.exports = {
  extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
  plugins: ["eslint-plugin-jest-dom", "eslint-plugin-react", "eslint-plugin-testing-library"],
  rules: {
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
  },
};
