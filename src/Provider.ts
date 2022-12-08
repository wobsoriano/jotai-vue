import { createStore, getDefaultStore } from 'jotai/vanilla'
import type { InjectionKey } from 'vue'
import { inject, provide } from 'vue'

type Store = ReturnType<typeof createStore>

export const storeKey = Symbol('STORE_INJECTION_KEY') as InjectionKey<Store>

interface Options {
  store?: Store
}

export const useStore = (options?: Options) => {
  const store = inject(storeKey)
  return options?.store || store || getDefaultStore()
}

export const useProvideStore = (store?: Store) => {
  let storeRef

  if (!store && !storeRef)
    storeRef = createStore()

  provide(storeKey, store || storeRef)
}
