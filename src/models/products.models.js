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

const update = async (name, id) => {
  const [result] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
  return result;
};

const deleted = async ({ id }) => {
  const [result] = await connection.execute(
    'DELETE FROM products WHERE id = ?', [id]
  );
  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
  insert,
  update,
  deleted,
};