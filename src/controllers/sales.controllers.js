const findSaleById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productServices.findSaleById(id);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  res.status(200).json(message);
};

const createSale = async (req, res) => {
  const { type, message } = await productServices.createSale(req.body);

  if (type) {
    return res.status(400).json(message);
  };
  return res.status(201).json(message);
};