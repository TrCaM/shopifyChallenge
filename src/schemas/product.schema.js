const Product = `
  input ProductInput {
    name: String!
    description: String
    unitPrice: Float!
    inventory: Int
  }

  type Product {
    id: ID!
    name: String!
    description: String
    unitPrice: Float!
    inventory: Int
    shop: Shop!
  }

  extend type Query {
    getProduct(productId: ID!): Product
  }

  extend type Mutation {
    addNewProduct(shopId: ID!, input: ProductInput!): Product
    updateProduct(productId: ID!, input: ProductInput!): Product
    removeProduct(productId: ID!): Product
  }
`;

export default () => [Product];
