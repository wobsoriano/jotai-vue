import { atom } from 'jotai-vue'

export const urlAtom = atom('https://jsonplaceholder.typicode.com/todos/1')
export const fetchTodoAtom = atom(
  async (get) => {
    const response = await fetch(get(urlAtom))
    return await response.json() as { id: number; completed: false }
  },
)
