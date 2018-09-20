const LineItem = `
  input LineItemInput {
    name: String
    unitPrice: Float!
    quantity: Int!
  }

  type LineItem {
    id: ID!
    name: String
    unitPrice: Float!
    quantity: Int!
  }

  type Query {
    getLineItem(id: ID!): LineItem
  }

  type Mutation {
    newLineItem(input: LineItemInput): LineItem
    updateLineItem(id: ID!, input: LineItemInput): LineItem
    deleteLineItem(id: ID!): LineItem
  }
`;

export default () => [LineItem];