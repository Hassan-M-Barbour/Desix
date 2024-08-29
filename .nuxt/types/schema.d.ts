import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["resend"]?: typeof import("nuxt-resend").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-resend", Exclude<NuxtConfig["resend"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   resend: {
      apiKey: any,
   },
  }
  interface PublicRuntimeConfig {
   gtag: {
      enabled: boolean,

      initMode: string,

      id: string,

      initCommands: Array<any>,

      config: any,

      tags: Array<any>,

      loadingStrategy: string,

      url: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }