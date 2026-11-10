import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import test from "node:test";
import { archive } from "../src/server/archive.ts";
import { archiveHandler } from "../src/server/api.ts";
import cases from "./fixtures/legacy-api.json" with { type: "json" };
import data from "../src/server/archive.json" with { type: "json" };

function normalize(value, unordered) {
  if (Array.isArray(value)) {
    const rows = value.map((item) => normalize(item, unordered));
    return unordered
      ? rows.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
      : rows;
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, normalize(value[key], unordered)]),
    );
  }
  return value;
}

// Captured from the PostgreSQL-backed production API before migration on 2026-11-10.
for (const { method, args, path, sha256, unordered } of cases) {
  test(`preserves production response: ${path}`, () => {
    const response = normalize(archive[method](...args), unordered);
    const hash = createHash("sha256")
      .update(JSON.stringify(response))
      .digest("hex");
    assert.equal(hash, sha256);
  });
}

test("retains the complete production archive and all relationships", () => {
  const expected = {
    article: 1234,
    image: 1378,
    player: 204,
    author: 33,
    team: 25,
    class: 20,
  };
  for (const [table, count] of Object.entries(expected)) {
    assert.equal(data[table].length, count);
    assert.equal(new Set(data[table].map(({ id }) => id)).size, count);
  }
  for (const article of data.article) {
    for (const table of ["author", "team", "class"]) {
      assert.ok(data[table].some(({ id }) => id === article[table]));
    }
  }
  for (const table of ["player", "image"]) {
    for (const record of data[table])
      assert.ok(data.team.some(({ id }) => id === record.team));
  }
});

test("treats search punctuation as literal text", () => {
  assert.deepEqual(archive.search("' OR 1=1 --"), {
    articles: [],
    images: [],
    authors: [],
    teams: [],
  });
  assert.deepEqual(archive.search("sundman"), archive.search("SUNDMAN"));
});

test("keeps author rankings descending", () => {
  const counts = archive.authors().map(({ amount }) => Number(amount));
  assert.deepEqual(
    counts,
    [...counts].sort((a, b) => b - a),
  );
});

function request(method, query) {
  const response = {
    code: 200,
    headers: {},
    body: undefined,
    status(code) {
      this.code = code;
      return this;
    },
    setHeader(name, value) {
      this.headers[name] = value;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
  archiveHandler(["page"], ({ page }) => archive.articles(page))(
    { method, query },
    response,
  );
  return response;
}

test("rejects missing, repeated, fractional and invalid pages and unsupported methods", () => {
  for (const page of [
    undefined,
    ["1", "2"],
    "0",
    "-1",
    "1.5",
    "NaN",
    "Infinity",
    "9999999999999999999",
  ]) {
    assert.equal(request("GET", { page }).code, 400);
  }
  assert.equal(request("POST", { page: "1" }).code, 405);
  assert.equal(request("POST", { page: "1" }).headers.Allow, "GET");
  assert.equal(request("GET", { page: "1" }).body.length, 10);
  assert.deepEqual(request("GET", { page: "9999" }).body, []);
});
