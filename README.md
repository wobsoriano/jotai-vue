# jotai-vue

Vue integration for **[Jotai]**, a tiny state manager
with many atomic tree-shakable stores.

* **Small.** Less than 1 KB with all helpers. Zero dependencies.
* **Fast.** With small atomic and derived stores, you do not need to call
  the selector function for all components on every store change.
* **Tree Shakable.** The chunk contains only stores used by components
  in the chunk.
* It has good **TypeScript** support.

## Install

```sh
npm install jotai-vue
```

## Create Atoms

Define your own state atoms, or take advantage of Jotai's integrations with [Immer](https://jotai.org/docs/integrations/immer), [XState](https://jotai.org/docs/integrations/xstate), [TanStack Query](https://jotai.org/docs/integrations/query), [Redux](https://jotai.org/docs/integrations/redux), [Zustand](https://jotai.org/docs/integrations/zustand) and others to wire up pure vanilla javascript state management into your application.

Each atom is their own small piece of shared state.

```ts
import { atom } from "jotai-vue";

export const countAtom = atom(0);
```

## Use Atoms

Use atoms in your components and the state will automatically be shared across components.

```vue
<script setup lang="ts">
import { useAtom } from "jotai-vue";

// Atoms shouldn't be created in the `setup` scripts, but imported from other files
import { countAtom } from "./testAtoms";

const [count, setCount] = useAtom(countAtom);
</script>

<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="setCount((prev) => prev + 1)">increment</button>
  </div>
</template>
```

## Comparison to Pinia, VueX and other state managers

The most similar library to Jotai is not [Pinia], but rather [Nanostores] or [Recoil].

[Pinia] is a type-safe state store developed by the core Vue.js team, and the replacement for [VueX]. They, like the core `ref` from Vue, are all
proxy state solutions. You mutate an object (e.g. `store.count++`), and then side-effects are automatically calculated. Vue has [well-documented limitation](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive) on this style of reactivity system.

By comparison, reducer and Atomic state solutions, like `useState` in React, expect
[immutable state updates](https://vuejs.org/guide/extras/reactivity-in-depth.html#immutable-data) (e.g. via reducers `(prev) => {...prev, count: prev.count+1}`)

All approaches have their benefits and followers. Jotai acts as a glue for easily working across all of them.


| State Type | Libraries |
|------------|-----------|
| Atomic     | [Jotai], [Nanostores], [Recoil]    |
| Proxy      | [Pinia], [VueX], [Valtio], [MobX]  |
| Reducer    |  [Zustand], [Redux]                 |


## License

MIT

[Redux]: https://redux.js.org/
[Valtio]: https://valtio.pmnd.rs/
[Recoil]: https://recoiljs.org/
[Nanostores]: https://github.com/nanostores/nanostores
[Zustand]: https://zustand-demo.pmnd.rs/
[VueX]: https://vuex.vuejs.org/
[MobX]: https://mobx.js.org/
[Jotai]: https://jotai.org/
[Pinia]: https://pinia.vuejs.org/