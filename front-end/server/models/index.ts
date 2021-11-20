import { Sequelize } from "sequelize-typescript";

import { User } from "./definitions/User";
import { Item } from "./definitions/Item";
import { ItemReceptionAssociation } from "./definitions/ItemReceptionAssociation";
import { Category } from "./definitions/Category";
import config from "../config";

const sequelize = new Sequelize('postgres', 'postgres', 'Skele3179', {
  host: "178.18.252.38",
  dialect: 'postgres',
  port: 5432
});

sequelize.addModels([User, Category, Post, PostTagAssociation]);

export { User, Post, PostTagAssociation, Category };

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  await User.findOrCreate({
    where: { email: "abouhlal@gmail.com" },
    defaults: { name: "admin", email: "abouhlal@gmail.com" },
  });
};
