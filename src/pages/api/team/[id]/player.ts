import { Author, Player } from "src/constants/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (teamId: string | string[]) => `
SELECT DISTINCT
  *,
  (select name from team where team=team.id) as team
FROM 
  player
WHERE
  team='${teamId}';
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Player[]>,
) {
  if (server.validate(req.query, ["id"])) {
    if (req.method === "GET") {
      const authors = await server.query<Author>(
        select(req.query.id as string),
      );
      server.respond(res, authors);
    }
  } else {
    server.error(res, 404);
  }
}
