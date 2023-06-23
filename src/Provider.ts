import type { createStore } from "jotai/vanilla";
import { getDefaultStore } from "jotai/vanilla";
import { provide, inject } from "vue";

type Store = ReturnType<typeof createStore>;

interface Options {
  store?: Store;
}

export const StoreKey = Symbol("jotai-vue-store");

export const provideStore = (store: Store) => provide(StoreKey, store);

export const useStore = (options?: Options) => {
  return inject(StoreKey, options?.store || getDefaultStore());
};
