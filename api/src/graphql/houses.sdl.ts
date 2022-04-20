export const schema = gql`
  type House {
    id: String!
    name: String!
    houseColours: String!
    animal: String!
    founder: String!
    ghost: String!
    element: String!
    wizards: [Wizard]!
  }

  type Query {
    houses: [House!]! @skipAuth
    house(id: String!): House @skipAuth
  }
`
