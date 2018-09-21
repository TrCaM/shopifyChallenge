class Shop {

  constructor({shopId, name, owner}) {
    this.id = shopId;
    this.name = name;
    this.owner = owner;
  }

  products() {
    
  }

}

export const Query = {
  shop: ({shopId}, __, { mysql, connection }) => {
    try {
      let result = await connection.query(`SELECT * from Shops where ShopId = ${mysql.escape(shopId)}`);
      return new Shop

    } catch (err) {
      throw new Error(err);
    }

  }

}