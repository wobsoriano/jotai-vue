import type { Atom, ExtractAtomValue } from 'jotai/vanilla'
import { getCurrentInstance, onScopeDispose, ref } from 'vue'
import { useStore } from './Provider'
import type { AwaitedRef } from './useAtom'

type Store = ReturnType<typeof useStore>

interface Options {
  store?: Store
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
  const store = useStore(options)

  const atomValue = ref(store.get(atom))

  const unsub = store.sub(atom, () => {
    atomValue.value = store.get(atom) as any
  })

  if (getCurrentInstance()) {
    onScopeDispose(() => {
      unsub()
    })
  }

  return atomValue
}
