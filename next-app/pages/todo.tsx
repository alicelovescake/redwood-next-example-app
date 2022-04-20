import * as todos from '../graphql-client/todos'

type Todo = {
  id: number
  body: string
  status: string
}

export default function Todo({ todos }: { todos: Todo[] }) {
  return (
    <div>
      <h1>This is your todo list!</h1>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <h2>{todo.body}</h2>
        </li>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const allTodos = await todos.get()

  return {
    props: {
      todos: allTodos ?? [],
    },
  }
}
