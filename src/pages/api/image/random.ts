import { Image } from "src/constants/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = () => `
SELECT
  *
FROM 
  image OFFSET floor(random() * (SELECT COUNT(*) FROM image))
LIMIT 
  10;
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Image[]>,
) {
  if (req.method === "GET") {
    const images = await server.query<Image>(select());
    server.respond(res, images);
  } else {
    server.error(res, 404);
  }
}
