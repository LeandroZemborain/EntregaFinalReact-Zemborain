const ItemModel = {
  id: 0, //Number
  description: "", //String,
  price: 0, //Number,
  image: "", //String
  category: "", //String,
  title: "", //String
};

const ItemOrderModel = { amount: 0 /**Number */, item: ItemModel };//

const OrderModel = {
  date: "", //String,
  id: 0, //Number
  items: [ItemOrderModel],
};

const CollectionOrdersModel = {
  orders: [OrderModel],
};
