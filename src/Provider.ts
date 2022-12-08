import type { createStore } from 'jotai/vanilla'
import { getDefaultStore } from 'jotai/vanilla'

type Store = ReturnType<typeof createStore>

interface Options {
  store?: Store
}

export const useStore = (options?: Options) => {
  return options?.store || getDefaultStore()
}
