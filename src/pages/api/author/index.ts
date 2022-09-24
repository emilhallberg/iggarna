import { Author } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = `
SELECT 
  *, 
  (select count(id) from article where author=author.id) as amount 
FROM 
  author 
ORDER BY 
  amount DESC;
 `;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Author[]>,
) {
  if (req.method === "GET") {
    const authors = await server.query<Author>(select);
    server.respond(res, authors);
  } else {
    server.error(res, 404);
  }
}
