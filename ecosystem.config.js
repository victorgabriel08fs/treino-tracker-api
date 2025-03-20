module.exports = {
  apps: [
    {
      name: "treino-tracker",
      script: "./src/index.js", // Certifique-se de que o caminho está correto
      watch: true,
      ignore_watch: ["src/database/dev.db"],
    },
  ],
};
