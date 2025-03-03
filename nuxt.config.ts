// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: '济南馥芮美容',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  vite: {
    server: {
      hmr: {
        clientPort: 443, // 假设你的开发环境支持通过HTTPS进行HMR
      },
    },
  },
});
