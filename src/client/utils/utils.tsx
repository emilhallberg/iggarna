import { ReactElement } from "react";
import { v4 } from "uuid";

export const hexo = (hex: string, o: number): string =>
  `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(
    hex.slice(3, 5),
    16,
  )},${parseInt(hex.slice(5, 7), 16)},${o})`;

export function hexa(hex: string, a: number): string {
  return `#${hex
    .replace(/^#/, "")
    .replace(/../g, (color) =>
      `0${Math.min(255, Math.max(0, parseInt(color, 16) + a)).toString(
        16,
      )}`.substr(-2),
    )}`;
}

export const uuid: () => string = () => v4();

export const p = (s: string): ReactElement[] =>
  s
    .split("\n")
    .map((e) => <p key={uuid()} dangerouslySetInnerHTML={{ __html: e }} />);

export const cap = (s: string) =>
  `${s[0].toUpperCase()}${s.slice(1, s.length)}`;

export const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; ) {
    hash = str.charCodeAt(i) + (hash * 32 - hash);
    i += 1;
  }

  const h = hash % 360;
  return `hsl(${h}, ${50}%, ${50}%)`;
};

export const getInitials = (str: string) =>
  str
    .match(/(\b\S)?/g)
    ?.join("")
    .toUpperCase();
