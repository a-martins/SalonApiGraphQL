require('dotenv').config();
//Note this is just for the CLI not used for prod because of compliation error.
module.exports = {
  name: 'default',
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: [
    'src/**/*.entity.ts'
  ],
  migrations: [
    'src/db/migrations/*.ts'
  ],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
};
