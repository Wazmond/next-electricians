import * as migration_20250401_101927 from './20250401_101927';

export const migrations = [
  {
    up: migration_20250401_101927.up,
    down: migration_20250401_101927.down,
    name: '20250401_101927'
  },
];
