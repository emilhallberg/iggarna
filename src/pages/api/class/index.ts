import { Class } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = "SELECT * FROM class;";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Class[]>,
) {
  if (req.method === "GET") {
    const classes = await server.query<Class>(select);
    server.respond(res, classes);
  } else {
    server.error(res, 404);
  }
}
