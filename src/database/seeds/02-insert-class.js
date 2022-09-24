const table = "class";

const classes = [
  { id: "7b09cbde-1864-4822-81ff-7a93d852d572", name: "Damer" },
  { id: "374ed528-c3c5-47aa-9131-d524d8a3eec9", name: "F11" },
  { id: "52fb1e18-042e-4ca4-9858-adeedddb432c", name: "F12" },
  { id: "cf261f39-1015-41cd-8efa-ef9b77a09a03", name: "F13" },
  { id: "a48b4717-5b3d-44f6-b18f-b4438d0881ce", name: "F14" },
  { id: "f02864e0-32df-4fc2-9901-bf34bd1b18d2", name: "F15" },
  { id: "9c4201b8-9122-49af-9b18-448afea0e635", name: "F16" },
  { id: "eba0d26e-f39e-4db5-9cd8-d8493e9ff7e6", name: "F17" },
  { id: "f1fc9937-1db3-4394-ba24-32f8c8fab97a", name: "Herrar" },
  { id: "8a6bca63-b66b-473e-befb-671ba62d632d", name: "Herrar 2" },
  { id: "8cb959e9-e56c-44aa-b706-37b233333aa9", name: "Övrigt" },
  { id: "ed5a279d-6dd4-4a69-afb7-4faf82381978", name: "P09" },
  { id: "c4500473-95cb-4914-ac36-ead7903a4045", name: "P10" },
  { id: "7e60da94-5acf-4686-a697-e9507b128d36", name: "P11" },
  { id: "e19ed65d-9c0d-432a-8caf-65438b4cae2f", name: "P12" },
  { id: "aac02fa1-4321-4cfa-91b1-3fef467829bf", name: "P13" },
  { id: "92fda634-ad49-4e8e-b9c4-b6febf0408be", name: "P14" },
  { id: "162598ac-fe88-464e-9304-0e8bea21dd5f", name: "P15" },
  { id: "6f616bbe-160f-4654-b2c8-d7029677121b", name: "P16" },
  { id: "f5fcc190-f089-479c-807b-a68b106880de", name: "P17" },
];

exports.seed = async (knex) =>
  knex(table)
    .del()
    .then(() => knex(table).insert(classes));
