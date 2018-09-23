const LineItemSchema = `
  input LineItemInput {
    productId: Int!,
    quantity: Int!
  }

  type LineItem {
    product: Product!
    name: String
    quantity: Int!
    value: Float!
  }
`;

export default () => [LineItemSchema];
