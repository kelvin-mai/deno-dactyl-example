import { Model, DataTypes } from '../deps/denodb.ts';

export class DinosaurModel extends Model {
  static table = 'dinosaurs';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    period: DataTypes.STRING,
  };
}
