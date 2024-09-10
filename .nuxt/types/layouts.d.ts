import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "ar" | "default" | "layout2" | "se"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}