import { readdirSync } from 'fs';

export function getGamesPaths() {
  return readdirSync(`./src/pages/spill`).map((name) =>
    name.substring(0, name.length - 4),
  );
}
