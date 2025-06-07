const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5500', // ✅ agora igual ao fetch
    chromeWebSecurity: false // ✅ ajuda com CORS
  }
})
