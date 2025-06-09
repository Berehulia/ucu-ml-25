import { mkdir, writeFile } from "fs/promises";
import { stringify } from "csv-stringify/sync";

const response = await fetch(
  "https://avrora.ua/index.php?dispatch=pwa.store_locations&is_ajax=1"
);

const { objects } = await response.json();
const locations = Object.values(objects);

await mkdir("./data", { recursive: true });

const json = JSON.stringify(locations, null, 2);
await writeFile("./data/store_locations.json", json);

const csv = stringify(locations, { header: true });
await writeFile("./data/store_locations.csv", csv);

const kyiv_locations = locations.filter(({ city }) => city === "Київ");
const kyiv_csv = stringify(kyiv_locations, { header: true });
await writeFile("./data/kyiv_store_locations.csv", kyiv_csv);

const lviv_locations = locations.filter(({ city }) => city === "Львів");
const lviv_csv = stringify(lviv_locations, { header: true });
await writeFile("./data/lviv_store_locations.csv", lviv_csv);
