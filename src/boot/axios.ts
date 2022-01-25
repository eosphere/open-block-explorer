import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $hyperion: unknown;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
debugger;
const hyperion = axios.create({ baseURL: process.env.HYPERION_ENDPOINT });

export default boot(({ app }) => {
  debugger;
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$hyperion = hyperion;
});
