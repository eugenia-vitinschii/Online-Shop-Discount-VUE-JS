// models/userModel.js
const bcrypt = require('bcrypt');

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin',
  },
  {
    id: 2,
    username: 'user',
    password: bcrypt.hashSync('user123', 10),
    role: 'user',
  },
];

module.exports = users;