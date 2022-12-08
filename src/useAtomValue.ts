import type { Atom, ExtractAtomValue } from 'jotai/vanilla'
import { getCurrentInstance, onScopeDispose, readonly, ref } from 'vue'
import { useStore } from './Provider'
import type { AwaitedRef } from './useAtom'

type Store = ReturnType<typeof useStore>

interface Options {
  store?: Store
  /**
   * @internal
   */
  storage?: typeof ref
}

export function useAtomValue<Value>(
  atom: Atom<Value>,
  options?: Options
): AwaitedRef<Value>

export function useAtomValue<AtomType extends Atom<unknown>>(
  atom: AtomType,
  options?: Options
): AwaitedRef<ExtractAtomValue<AtomType>>

export function useAtomValue<Value>(atom: Atom<Value>, options?: Options) {
  const store = useStore({ store: options?.store })
  const storage = options?.storage ? options.storage : ref
  const initialValue = store.get(atom)

  const atomValue = storage(initialValue)

  const unsub = store.sub(atom, () => {
    atomValue.value = store.get(atom) as any
  })

  if (getCurrentInstance()) {
    onScopeDispose(() => {
      unsub()
    })
  }

  return readonly(atomValue)
}
