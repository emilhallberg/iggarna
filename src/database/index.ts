/* eslint-disable no-console */
import { NextApiResponse } from "next";
import { Pool, PoolClient } from "pg";

const credentials = {
  user: process.env.DB_USER || "username",
  host:
    process.env.NODE_ENV === "production"
      ? process.env.DB_HOST || ""
      : "localhost",
  database: process.env.DB_DATABSE || "iggarna",
  password: process.env.DB_PASSWORD || "password",
  port: Number(process.env.DB_PORT) || 15432,
};

const pool = new Pool(credentials);

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err.message);
});

const connect = async (): Promise<PoolClient> =>
  pool
    .connect()
    .then((client) => client)
    .catch((error) => {
      setTimeout(connect, 5000);
      return error;
    });

const query = async <T>(str: string) =>
  connect()
    .then((client) =>
      client
        .query<Promise<T>>(str)
        .then(({ rows }) => {
          client.release();
          return rows;
        })
        .catch((err) => {
          client.release();
          console.error("Could not query database: ", err.message);
          return [];
        }),
    )
    .catch((err) => {
      console.error("Could not connect to database: ", err.message);
      return [];
    });

const validate = (obj: object, params: string[]): boolean => {
  const passed = Object.keys(obj).sort();
  const expected = params.sort();
  return expected.every((e) => passed.includes(e));
};

const toNumber = (param: string | string[]): number => Number(param);

const toBoolean = (param: string | string[]): boolean => Boolean(param);

const error = (res: NextApiResponse, status: number) => {
  switch (status) {
    case 404:
      return res.status(status).json({ message: "Method not Found" });
    default:
      return res.status(500).json({ message: "Server Error" });
  }
};

const respond = (res: NextApiResponse, body: unknown) =>
  res.status(200).json(body);

const server = { query, validate, toNumber, toBoolean, error, respond };

export default server;
