export const schema = gql`
  type Ingredient {
    id: String!
    name: String!
    classroom: Classroom
    classroomId: String
  }

  type Query {
    ingredients: [Ingredient!]! @skipAuth
    ingredient(id: String!): Ingredient @skipAuth
  }
  type Mutation {
    updateIngredient(id: String!, classroomId: String!): Ingredient! @skipAuth
  }
`
