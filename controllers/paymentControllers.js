const mercadopago = require("mercadopago");
const ProductosModel = require("../models/producto");

const checkout = async (req, res) => {
  const { products } = req.body;
  let Totalproducts = [];
  const promise = products.map(async ({ _id }) => {
    const produ = await ProductosModel.findById(_id);
    if (produ !== null) return produ;
  });
  await Promise.all(promise).then((values) => {
    Totalproducts = values;
  });

  const preferences = {
    items: [],
    back_urls: {
      success: "http://localhost:4000/payments-sucess",
      failure: "http://localhost:4000/payments-failure",
      pending: "http://localhost:4000/payments-pending",
    },
    auto_return: "approved",
  };
  console.log(products);
  console.log(Totalproducts);
  if (Totalproducts.length === products.length) {
    Totalproducts.map((products) => {
      preferences.items.push({
        id: products._id,
        title: products.ProductName,
        description: products.Productdetalle,
        category_id: products.Category,
        quantity: 1,
        currency_id: "ARS",
        unit_price: products.PriceProduct,
      });
    });
    try {
      const payments = await mercadopago.preferences.create(preferences);
      console.log(payments);
      return res
        .status(payments.status)
        .json({ redirectUrl: payments.body.init_point });
    } catch (error) {
      console.log(error);
      res.status(500).send({ failure: error.message });
    }
  }
};

module.exports = {
  checkout,
};
