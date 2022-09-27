import { Author } from "src/constants/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (teamId: string | string[]) => `
SELECT DISTINCT
  author as id,
  (select name from author where author=author.id) as name,
  count(id) as amount
FROM 
  article
WHERE
  team='${teamId}'
GROUP BY 
  author
ORDER BY 
  amount DESC;
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Author[]>,
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
