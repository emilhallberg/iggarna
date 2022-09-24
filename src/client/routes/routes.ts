import { uuid } from "src/client/utils/utils";

export interface Route {
  id: string;
  title: string;
  path: string;
  header: boolean;
}

export const home: Route = {
  id: uuid(),
  title: "Hem",
  path: "/",
  header: true,
};

export const history: Route = {
  id: uuid(),
  title: "Historia",
  path: "/historia",
  header: true,
};

export const articles: Route = {
  id: uuid(),
  title: "Referat",
  path: "/referat",
  header: true,
};

export const authors: Route = {
  id: uuid(),
  title: "Skribenter",
  path: "/skribenter",
  header: true,
};

export const teams: Route = {
  id: uuid(),
  title: "Lag",
  path: "/lag",
  header: true,
};

export const images: Route = {
  id: uuid(),
  title: "Bilder",
  path: "/bilder",
  header: true,
};

export const players: Route = {
  id: uuid(),
  title: "Spelare",
  path: "/spelare",
  header: true,
};

const routes = {
  home,
  history,
  articles,
  teams,
  authors,
  images,
  players,
};

export default routes;
