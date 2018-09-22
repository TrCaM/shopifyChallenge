const OrderSchema = `
  input OrderInput {
    lineItems: [LineItem!]!
  }

  type Order {
    id: Int!
    lineItems: [LineItem!]
    customer: String!
    createdAt: Int!
    value: Float!
    shop: Shop!
  }

  extend type Query {
    getOrder(orderId: Int!): Order
  }

  extend type Mutation {
    newOrder(shopId: Int!, input: OrderInput!): Order
    addLineItem(orderId: Int!, input: LineItemInput!): Order
    addLineItems(orderId: Int!, input: [LineItemInput!]!): Order
    removeLineItem(orderId: Int!, input: LineItemInput!): Order
    removeLineItems(orderId: Int!, input: [LineItemInput!]): Order
    deleteOrder(orderId: Int!): Order
  }
`;

export default () => [OrderSchema];