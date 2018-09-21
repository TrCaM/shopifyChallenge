const Shop = `
  input ShopInput {
    name: String!
    owner: String!
  }
  type Shop {
    id: ID!
    name: String!
    owner: String!
    products: [Product!]
    orders: [Order!]
  }

  extend type Query {
    shop(shopId: ID!): Shop
    products(shopId: ID!): [Product!]!
    orders(shopId: ID!): [Order!]!
  }

  extend type Mutation {
    newShop(input: ShopInput): Shop
    updateShopInfo(input: ShopInput): Shop
  }
`;