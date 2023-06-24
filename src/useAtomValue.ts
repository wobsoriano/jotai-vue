import type { Atom, ExtractAtomValue } from "jotai/vanilla";
import { getCurrentInstance, onScopeDispose, readonly, shallowRef, ref } from "vue";
import { useStore } from "./Provider";
import type { AwaitedRef } from "./useAtom";

type Store = ReturnType<typeof useStore>;

const isPromise = (x: unknown): x is Promise<unknown> => x instanceof Promise;

interface Options {
  store?: Store;
  /**
   * @internal
   */
  storage?: typeof ref;
  /**
   * @internal
   */
  storageKey?: string;
}

export function useAtomValue<Value>(
  atom: Atom<Value>,
  options?: Options
): AwaitedRef<Value>;

export function useAtomValue<AtomType extends Atom<unknown>>(
  atom: AtomType,
  options?: Options
): AwaitedRef<ExtractAtomValue<AtomType>>;

export function useAtomValue<Value>(atom: Atom<Value>, options?: Options) {
  const store = useStore({ store: options?.store });
  const initialValue = store.get(atom);

  if (isPromise(initialValue))
    throw new Error("[jotai-vue]: Async atom values are not supported.");

  const atomValue = options?.storage
    ? options.storage(options.storageKey, () => initialValue)
    /**
     * Prefer `shallowRef` over `ref` for external state
     * - https://vuejs.org/api/reactivity-advanced.html#shallowref
     * -
     */ 
    : shallowRef(initialValue);

  const unsub = store.sub(atom, () => {
    const nextValue = store.get(atom);
    atomValue.value = nextValue as any;
  });

  if (getCurrentInstance()) {
    onScopeDispose(() => {
      unsub();
    });
  }

  return readonly(atomValue);
}
