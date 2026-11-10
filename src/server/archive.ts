import data from "./archive.json" with { type: "json" };

const authorNames = new Map(data.author.map(({ id, name }) => [id, name]));
const classNames = new Map(data.class.map(({ id, name }) => [id, name]));
const teamNames = new Map(data.team.map(({ id, name }) => [id, name]));

const articles = data.article.map((article) => ({
  ...article,
  author: authorNames.get(article.author) ?? null,
  class: classNames.get(article.class) ?? null,
  team: teamNames.get(article.team) ?? null,
}));

function authorsFor(archive: typeof data.article) {
  const counts = new Map<string, number>();
  archive.forEach(({ author }) =>
    counts.set(author, (counts.get(author) ?? 0) + 1),
  );
  return data.author
    .filter(({ id }) => archive === data.article || counts.has(id))
    .map((author) => ({
      ...author,
      amount: String(counts.get(author.id) ?? 0),
    }))
    .sort((a, b) => Number(b.amount) - Number(a.amount));
}

const authors = authorsFor(data.article);
const teams = data.team.map((team) => {
  const dates = data.article
    .filter((article) => article.team === team.id)
    .map(({ date }) => date)
    .filter((date): date is string => date !== null)
    .sort();
  return { ...team, start: dates[0] ?? null, end: dates.at(-1) ?? null };
});

function pageOf<T>(rows: T[], page: number) {
  return rows.slice((page - 1) * 10, page * 10);
}

function randomPage<T>(rows: T[]) {
  return rows.slice(Math.floor(Math.random() * rows.length)).slice(0, 10);
}

const contains = (text: string | null, value: string) =>
  text?.toLocaleLowerCase("sv-SE").includes(value) ?? false;

export const archive = {
  articles: (page: number) => pageOf(articles, page),
  article: (id: string) =>
    articles
      .filter((article) => article.id === id)
      .map(({ id: _id, ...article }) => article),
  randomArticles: () => randomPage(articles),
  images: (page: number) => pageOf(data.image, page),
  image: (id: string) => data.image.filter((image) => image.id === id),
  randomImages: () => randomPage(data.image),
  players: (page: number) => pageOf(data.player, page),
  classes: () => data.class,
  authors: () => authors,
  topAuthors: () => authors.slice(0, 10),
  author: (id: string) => authors.filter((author) => author.id === id),
  authorArticles: (id: string, page: number) =>
    pageOf(
      articles.filter((_, index) => data.article[index].author === id),
      page,
    ),
  teams: () => teams,
  team: (id: string) =>
    data.team.filter((team) => team.id === id).map(({ name }) => ({ name })),
  teamArticles: (id: string, page: number) =>
    pageOf(
      articles.filter((_, index) => data.article[index].team === id),
      page,
    ),
  teamImages: (id: string, page: number) =>
    pageOf(
      data.image.filter((image) => image.team === id),
      page,
    ),
  teamPlayers: (id: string) =>
    data.player
      .filter((player) => player.team === id)
      .map((player) => ({
        ...player,
        team: teamNames.get(player.team) ?? null,
      })),
  teamAuthors: (id: string) =>
    authorsFor(data.article.filter((article) => article.team === id)),
  search: (value: string) => {
    const term = value.toLocaleLowerCase("sv-SE");
    return {
      articles: data.article
        .filter((article) =>
          [article.title, article.text, article.date].some((text) =>
            contains(text, term),
          ),
        )
        .map(({ id, title, date }) => ({ id, title, date })),
      authors: data.author.filter(({ name }) => contains(name, term)),
      teams: data.team.filter(({ name }) => contains(name, term)),
      images: data.image
        .filter(({ alt }) => contains(alt, term))
        .map(({ id, src, alt, date }) => ({ id, src, alt, date })),
    };
  },
};
