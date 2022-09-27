import { Player } from "src/constants/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (page: number) => `
SELECT
  *
FROM 
  player
LIMIT 
  10
OFFSET 
  ${(page - 1) * 10};
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Player[]>,
) {
  if (server.validate(req.query, ["page"])) {
    if (req.method === "GET") {
      const page = server.toNumber(req.query.page as string);
      const players = await server.query<Player>(select(page));
      server.respond(res, players);
    }
  } else {
    server.error(res, 404);
  }
}
