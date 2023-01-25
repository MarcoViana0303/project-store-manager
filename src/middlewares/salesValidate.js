const validateSales = async (req, res, next) => {
  const sales = req.body;

  const salesId = sales.map((product) => product.productId);

  const quantity = sales.map((product) => product.quantity);

  const salesDoesExist = salesId.some((id) => id === undefined);

  const quantityDoesExist = quantity.some((quantity) => quantity === undefined);

  if (salesDoesExist) return res.status(400).json({ message: '"productId" is required' });
  if (quantityDoesExist) return res.status(400).json({ message: '"quantity" is required' });

  // if (!quantity) {
  //   return res.status(400).json({ message: '"quantity" is required' });
  // }

  // if (quantity <= 0) {
  //   return res.status(422).json({ "message": "\"quantity\" must be greater than or equal to 1" });
  // }

  next();
};

module.exports = validateSales;