export const schema = gql`
  type Classroom {
    id: String!
    name: String!
    wizards: [Wizard]!
    spells: [Spell]!
    ingredients: [Ingredient]!
  }

  type Query {
    classrooms: [Classroom!]! @skipAuth
    classroom(id: String!): Classroom @skipAuth
  }

  input CreateClassroomInput {
    name: String!
  }

  input UpdateClassroomInput {
    name: String
    wizardIds: [String!]
    spellIds: [String!]
    ingredientIds: [String!]
  }

  type Mutation {
    createClassroom(input: CreateClassroomInput!): Classroom! @skipAuth
    updateClassroom(id: String!, input: UpdateClassroomInput!): Classroom!
      @skipAuth
    deleteClassroom(id: String!): Classroom! @skipAuth
  }
`
