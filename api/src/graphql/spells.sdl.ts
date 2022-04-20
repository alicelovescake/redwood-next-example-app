export const schema = gql`
  type Spell {
    id: String!
    name: String!
    incantation: String!
    effect: String!
    light: String!
    type: String!
    classroom: Classroom
    classroomId: String
  }

  type Query {
    spells: [Spell!]! @skipAuth
    spell(id: String!): Spell @skipAuth
  }

  type Mutation {
    updateSpell(id: String!, classroomId: String!): Spell! @skipAuth
  }
`
