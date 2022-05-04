export const schema = gql`
  type Wizard {
    id: String!
    firstName: String!
    lastName: String!
    classes: [Classroom]!
    house: House
    houseId: String
  }

  type Query {
    wizards: [Wizard!]! @requireAuth
    wizard(id: String!): Wizard @requireAuth
  }

  input CreateWizardInput {
    firstName: String!
    lastName: String!
    houseId: String
  }

  input UpdateWizardInput {
    firstName: String
    lastName: String
    houseId: String
  }

  type Mutation {
    createWizard(input: CreateWizardInput!): Wizard! @skipAuth
    updateWizard(id: String!, input: UpdateWizardInput!): Wizard! @requireAuth
    deleteWizard(id: String!): Wizard! @requireAuth
  }
`
