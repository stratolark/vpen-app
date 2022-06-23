// validation before enterging the database
import {
  Sequelize,
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

// const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
//   ssl: true,
//   dialect: 'mysql',
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: true,
//     },
//   },
// });
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: true,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
  //   sync: { force: true },
});

interface RestaurantModel
  extends Model<
    InferAttributes<RestaurantModel>,
    InferCreationAttributes<RestaurantModel>
  > {
  id: CreationOptional<number>;
  name: string;
  address: string;
}

export const Restaurant = sequelize.define<RestaurantModel>(
  'Restaurant',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: true }
);
