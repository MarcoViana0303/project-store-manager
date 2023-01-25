// const connection = require('./connection');

// const insert = async (body) => {
//   const { date } = body;

//   const [{ insertId }] = await connection.execute(
//     'INSERT INTO sales(date) VALUES(?)',
//     [date]
//   );
//   return insertId;
// };

// const findSaleById = async (id) => {
//   const [[result]] = await connection.execute(
//     'SELECT * FROM StoreManager.sales WHERE id = ?', [id]
//   );
//   return result;
// };

// module.exports = {
//   insert,
// }
