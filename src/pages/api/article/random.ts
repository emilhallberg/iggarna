import { Article, Error } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = () => `
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
  article OFFSET floor(random() * (SELECT COUNT(*) FROM article))
LIMIT 
  10;
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[] | Error>,
) {
  if (req.method === "GET") {
    const articles = await server.query<Article>(select());
    server.respond(res, articles);
  } else {
    server.error(res, 404);
  }
}
