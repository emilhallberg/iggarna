export interface Author {
  id: string;
  name: string;
  amount: number;
}

export interface Class {
  id: string;
  name: string;
}

export interface Team {
  id: string;
  name: string;
  start: string;
  end: string;
}

export interface Article {
  id: string;
  title: string;
  text: string;
  score: string;
  date: string;
  author: Author["name"];
  class: Class["name"];
  team: Team["name"];
}

export interface Image {
  id: string;
  src: string;
  alt: string;
  date: string;
  team: Team["id"];
}

export interface Player {
  id: string;
  name: string;
  src: Image["src"];
  alt: Image["alt"];
  team: Team["name"];
}

export interface Statistic {
  scored: number;
  against: number;
  wins: number;
  losses: number;
  points: number;
}

export interface SearchResult {
  articles: Article[];
  authors: Author[];
  teams: Team[];
  images: Image[];
}

export interface Error {
  message: string;
}
