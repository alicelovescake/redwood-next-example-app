export const schema = gql`
  type Classroom {
    id: String!
    name: String!
    wizards: [Wizard]!
    spells: [Spell]!
    ingredients: [Ingredient]!
  }

  type Query {
    classrooms: [Classroom!]! @requireAuth
    classroom(id: String!): Classroom @requireAuth
  }

  input CreateClassroomInput {
    name: String!
  }

  input UpdateClassroomInput {
    name: String
  }

  type Mutation {
    createClassroom(input: CreateClassroomInput!): Classroom! @requireAuth
    updateClassroom(id: String!, input: UpdateClassroomInput!): Classroom!
      @requireAuth
    deleteClassroom(id: String!): Classroom! @requireAuth
  }
`
