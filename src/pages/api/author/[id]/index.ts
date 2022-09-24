import { Error, Author } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (id: string | string[]) => `
SELECT 
  *,
  (select count(id) from article where author=author.id) as amount
FROM 
  author
WHERE
  id='${id}';
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Author[] | Error>,
) {
  if (server.validate(req.query, ["id"])) {
    if (req.method === "GET") {
      const { id } = req.query;
      const author = await server.query<Author>(select(id));
      server.respond(res, author);
    }
  } else {
    server.error(res, 404);
  }
}
