const Order = `
  input OrderInput {
    lineItems: [LineItem!]!
  }

  type Order {
    id: ID!
    lineItems: [LineItem!]
    customer: String!
    timestamp: Date!
    value: Float!
    shop: Shop!
  }

  extend type Query {
    getOrder(orderId: ID!): Order
  }

  extend type Mutation {
    newOrder(shopId: ID!, input: OrderInput!): Order
    addLineItem(orderId: ID!, input: LineItemInput!): Order
    addLineItems(orderId: ID!, input: [LineItemInput!]!): Order
    removeLineItem(orderId: ID!, input: LineItemInput!): Order
    removeLineItems(orderId: ID!, input: [LineItemInput!]): Order
    deleteOrder(orderId: ID!): Order
  }
`;