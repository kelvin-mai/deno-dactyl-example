import { Database } from './deps/denodb.ts';
import { DinosaurModel } from './models/dinosaur.model.ts';

export const db = new Database('postgres', {
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'dinosaurs',
});

db.link([DinosaurModel]);
