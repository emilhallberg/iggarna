import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

export default [
  ...nextVitals,
  prettier,
  {
    settings: {
      "import/resolver": { typescript: { alwaysTryTypes: true, project: "." } },
    },
    rules: {
      "import/no-unresolved": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        { js: "never", jsx: "never", ts: "never", tsx: "never" },
      ],
      "react-hooks/exhaustive-deps": "error",
    },
  },
];
