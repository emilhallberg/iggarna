import { Article } from "src/constants/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (teamId: string | string[], page: number) => `
SELECT
  id, 
  title,
  text,
  score,
  date,
  (select name from author where author=author.id) as author,
  (select name from class where class=class.id) as class,
  (select name from team where team=team.id) as team
FROM 
  article
WHERE
  team='${teamId}'
LIMIT
  10
OFFSET 
  ${(page - 1) * 10};
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>,
) {
  if (server.validate(req.query, ["id", "page"])) {
    if (req.method === "GET") {
      const page = server.toNumber(req.query.page);
      const articles = await server.query<Article>(select(req.query.id, page));
      server.respond(res, articles);
    }
  } else {
    server.error(res, 404);
  }
}
