import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } from '$env/static/private';
import * as schema from './schema';
import mysql from "mysql2/promise";
import { drizzle as drizzleMysql } from "drizzle-orm/mysql2";
 
console.log(import.meta.env.PROD, 'import.meta.env.PROD')

function createPlanetScaleConnection() {
  const planetscaleConnection = connect({
    host: DATABASE_HOST,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
  });
  return drizzle(planetscaleConnection, { schema: schema, logger: true })
}

async function createMysqlConnection() {
  const mysqlConnection = await mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    database: DATABASE_NAME,
    password: DATABASE_PASSWORD
  });
  return drizzleMysql(mysqlConnection, { schema: schema, logger: true, mode: 'default' });
}

export const db = import.meta.env.PROD ? createPlanetScaleConnection() : await createMysqlConnection();
