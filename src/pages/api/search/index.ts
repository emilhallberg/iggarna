import {
  Article,
  Author,
  Image,
  SearchResult,
  Team,
} from "src/constants/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import server from "src/database";

const searchArticles = (value: string | string[]) => `
SELECT id, title, date FROM article WHERE title ILIKE '%${value}%' OR text ILIKE '%${value}%' OR date ILIKE '%${value}%';
`;

const searchAuthors = (value: string | string[]) => `
SELECT id, name FROM author WHERE name ILIKE '%${value}%';
`;

const searchTeams = (value: string | string[]) => `
SELECT id, name FROM team WHERE name ILIKE '%${value}%';
`;

const searchImages = (value: string | string[]) => `
SELECT id, src, alt, date FROM image WHERE alt ILIKE '%${value}%';
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[]>,
) {
  if (server.validate(req.query, ["value"])) {
    if (req.method === "GET") {
      const { value } = req.query;
      const articles = await server.query<Article>(
        searchArticles(value as string),
      );
      const authors = await server.query<Author>(
        searchAuthors(value as string),
      );
      const teams = await server.query<Team>(searchTeams(value as string));
      const images = await server.query<Image>(searchImages(value as string));
      server.respond(res, { articles, authors, teams, images });
    }
  } else {
    server.error(res, 404);
  }
}
