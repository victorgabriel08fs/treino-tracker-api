module.exports = {
  apps: [
    {
      name: "treino-tracker",
      script: "src/index.js", // ou o seu arquivo de entrada
      watch: true,
      ignore_watch: ["src/database/dev.db"], // Ignora mudanças no banco de dados
    },
  ],
};
