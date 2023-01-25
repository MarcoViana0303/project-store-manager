const connection = require('./connection');

const findAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity 
    FROM sales a INNER JOIN sales_products b
    ON b.sale_id = a.id;`,
  );
  console.log(result);
  return result.map(
    ({ sale_id: saleId, date, product_id: productId, quantity }) => ({
      saleId,
      date,
      productId,
      quantity,
    }),
  );
};

const findSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity FROM sales 
    INNER JOIN sales_products
    ON sales_products.sale_id = sales.id
    HAVING sale_id = ?;`, [id],
  );

  if (!result || result.length === 0) {
    return undefined;
  }
  const sales = result.map(({ date, product_id: productId, quantity }) => ({
    date, productId, quantity,
  }));
  return sales;
};

module.exports = {
  findAllSales,
  findSaleById,
};