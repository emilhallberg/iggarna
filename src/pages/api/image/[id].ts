import { Error, Image } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (id: string | string[]) => `
SELECT 
  *
FROM 
  image
WHERE
  id='${id}';
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Image[] | Error>,
) {
  if (server.validate(req.query, ["id"])) {
    if (req.method === "GET") {
      const { id } = req.query;
      const image = await server.query<Image>(select(id));
      server.respond(res, image);
    }
  } else {
    server.error(res, 404);
  }
}
