export const schema = gql`
  type Ingredients {
    id: String!
    name: String!
  }

  type Spell {
    id: String!
    name: String!
    incantation: String!
    effect: String!
    light: String!
    type: String!
    classroom: Classroom
  }

  type WizardsClasses {
    wizard: Wizard
    wizardId: String
    classroom: Classroom
    classroomId: String
  }

  type Classroom {
    id: String!
    name: String!
    wizards: [WizardsClasses]!
    spells: [Spell]!
    ingredients: [Ingredients]!
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
