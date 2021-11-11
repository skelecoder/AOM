import { Sequelize } from "sequelize-typescript";

import { User } from "./definitions/User";
import { Post } from "./definitions/Post";
import { Tag } from "./definitions/Tag";
import { PostTagAssociation } from "./definitions/PostTagAssociation";
import { Category } from "./definitions/Category";
import config from "../config";

const sequelize = new Sequelize('postgres', 'postgres', 'Skele3179', {
  host: "178.18.252.38",
  dialect: 'postgres',
  port: 5432
});

sequelize.addModels([User, Category, Post, Tag, PostTagAssociation]);

export { User, Post, Tag, PostTagAssociation, Category };

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  await User.findOrCreate({
    where: { email: "abouhlal@gmail.com" },
    defaults: { name: "admin", email: "abouhlal@gmail.com" },
  });
};
