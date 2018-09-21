const LineItemSchema = `
  input LineItemInput {
    productId: ID!,
    quantity: Int!
  }

  type LineItem {
    product: Product!
    name: String
    quantity: Int!
  }
`;

export default () => [LineItemSchema];