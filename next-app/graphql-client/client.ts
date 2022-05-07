import { createClient } from 'urql'

export const client = createClient({
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8911/graphql'
      : 'https://redwood-next-example-app.vercel.app/api/graphql',
})
