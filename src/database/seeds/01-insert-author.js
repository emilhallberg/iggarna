const table = "author";

const authors = [
  { id: "2d51a66b-65d6-4911-950b-0262c7a2e9ea", name: "Anders Hallberg" },
  { id: "4cca75f1-b104-4017-a94c-f8f06881b73b", name: "Anders Hallin" },
  { id: "6a48f091-fb72-4636-a31f-060e164aa510", name: "Anders Sverin" },
  { id: "e2523292-1a71-4e4f-aca1-5a84b60df40c", name: "Anders Westman" },
  {
    id: "afa3f390-4532-4953-abd5-b4e13c613b6b",
    name: "Ann-Margret Gustavsson",
  },
  { id: "736ac2e7-61ee-4750-be0f-5327f2cc5e7f", name: "Fredrik Forslin" },
  { id: "9966d5bf-b1d5-4d31-930d-8af0f7ea7f0c", name: "Hans Westling" },
  { id: "de3c1713-3d11-4e5c-a2f5-b63ebfcdf468", name: "Henrik Ängblom" },
  { id: "0d88899e-b420-4919-a6c2-97b63aec3ae8", name: "J-O Svedberg" },
  { id: "a4d53808-fd8d-4dd6-a20f-bf90931c0e2a", name: "Jan Sundman" },
  { id: "24cfb0c4-b113-4340-82cd-0880c0efbc23", name: "Jimmy Wallner" },
  { id: "5fe32620-454f-4e4f-8d48-a0fe6fab2f26", name: "Joel Nordkvist" },
  { id: "cb291a02-0468-4dd2-87b2-495c47a207aa", name: "Kåge Pettersson" },
  { id: "fdddbd31-babb-45ab-b8bc-8026b3bb9bc7", name: "Kenneth" },
  { id: "d20b1041-e442-4991-abbb-5bb6e264535a", name: "Kenneth Larsson" },
  { id: "3869a31e-64f4-4f3f-aa92-94d35df3fe95", name: "Kennethlarsson" },
  { id: "930d4464-56be-49d9-aba3-def81ed4a442", name: "Kent Sjöqvist" },
  { id: "589a9a32-b500-4cad-adda-e18323572601", name: "Lars Ärlemar" },
  { id: "7ace5b52-b7b2-410c-8652-de032e36d158", name: "Lars Vestling" },
  { id: "80212933-8001-4e1f-9cbb-0c1e0c0b5734", name: "Lennart Enström" },
  { id: "c24285f5-d239-4741-b577-83c0248181a0", name: "Love Olsson" },
  { id: "f82807a3-492a-478a-895d-61d91f4f99f2", name: "Mats Larsson" },
  { id: "80ed2307-4ede-4ae6-b67e-b978adb63b2e", name: "Mats Sjöqvist" },
  { id: "3322a575-95e7-4ef1-9d6d-810eff090161", name: "Mikael Axlund" },
  { id: "9594864c-5c9e-4d15-be53-b776593c016e", name: "Mikael Sondell" },
  { id: "d1e2bde9-fc23-457b-880a-6cbb73ababcc", name: "Per Fridh" },
  { id: "688168b4-dd85-45de-85e6-6d76dda5d875", name: "robin skarin" },
  { id: "851b1a5f-89ce-4c6a-bba6-b08d57471d6f", name: "Roger Zetterlund" },
  { id: "f3296f8c-c592-4693-8676-3cd9f68919da", name: "Ros-Marie Skjärvold" },
  { id: "0609f9f7-7e24-4e70-92c8-351e9ebfa22f", name: "Stefan Nordström" },
  { id: "c6128247-04a1-4110-abf1-bd0231d1097f", name: "Tony Lööf" },
  { id: "f60ecc1d-2505-4082-8a06-16f2f198a892", name: "Vanja Englund" },
  { id: "f147b0ea-b99e-43ab-938e-f76fe31aaf02", name: "Victor Hallberg" },
];

exports.seed = async (knex) =>
  knex(table)
    .del()
    .then(() => knex(table).insert(authors));
