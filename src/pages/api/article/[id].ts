import { Article, Error } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (id: string | string[]) => `
SELECT 
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
  id='${id}';
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[] | Error>,
) {
  if (server.validate(req.query, ["id"])) {
    if (req.method === "GET") {
      const { id } = req.query;
      const article = await server.query<Article>(select(id));
      server.respond(res, article);
    }
  } else {
    server.error(res, 404);
  }
}
