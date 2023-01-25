const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  console.log(result);
  return result;
};

const findProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products(name) VALUES(?)',
    [name],
  );
  return { id: insertId, name };
};

module.exports = {
  findAllProducts,
  findProductById,
  insert,
};