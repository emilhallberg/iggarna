import { Image } from "src/constants/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = (teamId: string | string[], page: number) => `
SELECT
  *
FROM 
  image
WHERE
  team='${teamId}'
LIMIT 
  10
OFFSET 
  ${(page - 1) * 10};
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Image[]>,
) {
  if (server.validate(req.query, ["id", "page"])) {
    if (req.method === "GET") {
      const page = server.toNumber(req.query.page as string);
      const images = await server.query<Image>(
        select(req.query.id as string, page),
      );
      server.respond(res, images);
    }
  } else {
    server.error(res, 404);
  }
}
