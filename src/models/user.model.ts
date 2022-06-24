import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  name: string;
  password: string;
}

@Table({
  tableName: 'user',
  timestamps: true,
  underscored: true
})
export default class User extends Model<User, UserCreationAttrs> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column({ type: DataType.STRING })
  surname!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string;
}
