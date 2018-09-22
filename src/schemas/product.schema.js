const ProductSchema = `
  input ProductInput {
    name: String!
    description: String
    unitPrice: Float!
    inventory: Int
  }

  type Product {
    id: Int!
    name: String!
    description: String
    unitPrice: Float!
    inventory: Int
    shop: Shop!
  }

  extend type Query {
    getProduct(productId: Int!): Product
  }

  extend type Mutation {
    addNewProduct(shopId: Int!, input: ProductInput!): Product
    updateProduct(productId: Int!, input: ProductInput!): Product
    removeProduct(productId: Int!): Product
  }
`;

export default () => [ProductSchema];
