import nextConfig from "eslint-config-next";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "build/**",
      ".vercel/**",
    ],
  },
  ...nextConfig,
  {
    rules: {},
  },
];

export default eslintConfig;
