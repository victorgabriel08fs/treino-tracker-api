export default {
  apps: [
    {
      name: "treino-tracker",
      script: "src/index.js",
      watch: true,
      ignore_watch: ["src/database/dev.db"],
    },
  ],
};
