import { Model, DataTypes, Values } from '../deps/denodb.ts';

export class DinosaurModel extends Model {
  static table = 'dinosaurs';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    period: DataTypes.STRING
  };
}

export interface DinosuarDTO extends Values {
  name: string;
  period: string;
}
