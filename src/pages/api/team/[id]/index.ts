import { Team, Error } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (id: string | string[]) => `
SELECT 
  name
FROM 
  team
WHERE
  id='${id}';
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Team[] | Error>,
) {
  if (server.validate(req.query, ["id"])) {
    if (req.method === "GET") {
      const { id } = req.query;
      const team = await server.query<Team>(select(id as string));
      server.respond(res, team);
    }
  } else {
    server.error(res, 404);
  }
}
