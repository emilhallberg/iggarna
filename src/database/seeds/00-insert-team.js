const table = "team";

const teams = [
  { id: "bbb80378-a3fa-400f-8c78-5e36003353c1", name: "Damer" },
  { id: "36a696ac-cabb-41a0-b199-532aeafd517c", name: "F82" },
  { id: "85abc929-9ac2-44c0-bcaf-18cb91f9f1a4", name: "F85" },
  { id: "62bc7b58-ef0e-4f66-973c-112ff69621bf", name: "F86" },
  { id: "2c4937cc-8fb0-4d34-b8fc-cdf9656c72bf", name: "F89" },
  { id: "41df1a2f-0351-43da-9d0d-f1e5095d72fc", name: "F90" },
  { id: "cb2b9fcc-1e13-4c04-8e79-9c9598d80a5d", name: "F91" },
  { id: "93b19ea5-8165-4ad9-8336-4cc4542b5e42", name: "F92" },
  { id: "c65a8483-bf85-4249-96d7-678006ef48c7", name: "F93" },
  { id: "c37a1d3d-35f5-4b26-91a0-e39d572ca427", name: "F94" },
  { id: "22356aed-4d9a-47f6-b762-575cb9c368da", name: "Herrar" },
  { id: "6d8ff4c5-c695-4827-a1b7-01e0ec248b52", name: "Herrar 2" },
  { id: "ee8ff6e4-498e-4fda-b85a-b63101e35f4f", name: "Övrigt" },
  { id: "97a0f582-7130-4ce4-b1c9-c10ea79fe134", name: "P82" },
  { id: "5645c54d-4b43-4a3f-bc94-2e3c51f9ad26", name: "P83" },
  { id: "41c6d517-6dbd-4b6e-bb14-225c5c9f9cae", name: "P86" },
  { id: "414a983b-95dc-4bc4-b30e-29cc7f1b7926", name: "P88" },
  { id: "d1130185-418a-45be-ad0d-21b039b57f7f", name: "P89" },
  { id: "0740c02a-d817-44a3-891a-a389d77e817e", name: "P90" },
  { id: "480edfc9-65ac-48d8-bffa-6735a3757368", name: "P93" },
  { id: "51aab00a-46f6-4324-9e33-7bc95f22d667", name: "P94" },
  { id: "7d45e6c5-e581-4547-91bc-b98653198087", name: "P95" },
  { id: "0dc6b04b-46b0-4df3-b63b-892da2999103", name: "P96" },
  { id: "b50718ab-e5be-4ddd-bbe0-01f5c629c598", name: "P97" },
  { id: "ed546d3a-73bb-486d-b62f-f6753231532f", name: "P98" },
];

exports.seed = async (knex) =>
  knex(table)
    .del()
    .then(() => knex(table).insert(teams));
