import type { createStore } from 'jotai/vanilla'
import { getDefaultStore } from 'jotai/vanilla'
import { inject, provide } from 'vue'

type Store = ReturnType<typeof createStore>

interface Options {
  store?: Store
}

export const StoreKey = Symbol('jotai-vue-store')

export const provideStore = (store: Store) => provide(StoreKey, store)

export const useStore = (options?: Options) => {
  /*
  Priority:
   1) The store parameter
   2) The store injected
   3) The default jotai store
  */
  return options?.store || inject(StoreKey, getDefaultStore())
}
