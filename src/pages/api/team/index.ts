import { archive } from "src/server/archive";
import { archiveHandler } from "src/server/api";

export default archiveHandler([], () => archive.teams());
