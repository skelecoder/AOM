import { Sequelize } from 'sequelize-typescript';

import { User } from './definitions/User';
import { Item } from './definitions/Item';
import { Reception } from './definitions/Reception';
import { Delivery } from './definitions/Delivery';
import { Provider } from './definitions/Provider';
import { ItemReceptionAssociation } from './definitions/ItemReceptionAssociation';
import { ItemDeliveryAssociation } from './definitions/ItemDeliveryAssociation';

const sequelize = new Sequelize('amanor', 'postgres', 'Skele3179', {
    host: '178.18.252.38',
    dialect: 'postgres',
    port: 5432,
});

sequelize.addModels([User, Item, Reception, Delivery, Provider, ItemReceptionAssociation, ItemDeliveryAssociation]);

export { User, Item, Reception, Delivery, Provider, ItemReceptionAssociation, ItemDeliveryAssociation };

export const initDB = async () => {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    await User.findOrCreate({
        where: { email: 'abouhlal@gmail.com' },
        defaults: { name: 'admin', email: 'abouhlal@gmail.com' },
    });
};
