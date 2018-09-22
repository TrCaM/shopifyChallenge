class Product {
  constructor({productId, shopId, productName, description, unitPrice, inventory}, context) {
    //Setting basic data
    this.productId = productId;
    this.shopId = shopId;
    this.productName = productName;
    this.description = description;
    this.unitPrice = unitPrice;
    this.inventory = inventory;
    //Setting context
    this.context = context;
  }

  async shop() {
    let shopData = await this.context.db.find('shop', {shopId: this.shopId});
    return new Shop(shopData, context);
  }
}