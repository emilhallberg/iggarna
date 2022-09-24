import { Team } from "src/constants/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const select = `
  SELECT 
    *, 
    (select min(date) from article where article.team=team.id group by article.date order by article.date asc limit 1) as start, 
    (select min(date) from article where article.team=team.id group by article.date order by article.date desc limit 1) as end 
  FROM 
    team;
 `;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Team[]>,
) {
  if (req.method === "GET") {
    const teams = await server.query<Team>(select);
    server.respond(res, teams);
  } else {
    server.error(res, 404);
  }
}
