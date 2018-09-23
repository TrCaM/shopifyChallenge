const OrderSchema = `
  input OrderInput {
    customer: String!
  }

  type Order {
    id: Int!
    lineItems: [LineItem!]
    customer: String!
    createdAt: String!
    value: Float!
    shop: Shop!
  }

  extend type Query {
    getOrder(orderId: Int!): Order
  }

  extend type Mutation {
    newOrder(shopId: Int!, input: OrderInput!): Order
    addLineItem(orderId: Int!, input: LineItemInput!): Order
    removeLineItem(orderId: Int!, input: LineItemInput!): Order
    deleteOrder(orderId: Int!): String
  }
`;

export default () => [OrderSchema];
