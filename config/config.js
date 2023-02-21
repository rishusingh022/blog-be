const dotenv = require('dotenv');

dotenv.config();

const baseConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: 'postgres',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 5432,
  database: process.env.POSTGRESQL_DB_NAME,
  seederStorage: 'sequelize',
};

module.exports = {
  development: baseConfig,
  test: baseConfig,
  production: {
    ...baseConfig,
    host: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
