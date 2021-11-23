import { Table, Column, DataType, AllowNull, BelongsToMany, ForeignKey, HasMany } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { Delivery } from './Delivery';
import { Reception } from './Reception';
import { ItemReceptionAssociation } from './ItemReceptionAssociation';
import { ItemDeliveryAssociation } from './ItemDeliveryAssociation';

@Table({
    timestamps: false,
    tableName: 'item',
})
export class Item extends BaseModel {
    @Column({ type: DataType.STRING, allowNull: false })
    public name!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    public unity!: string;

    @Column({ type: DataType.FLOAT })
    public price?: number;

    @BelongsToMany(() => Delivery, () => ItemDeliveryAssociation)
    deliveries: Array<Delivery & { ItemDeliveryAssociation: ItemDeliveryAssociation }>;

    @BelongsToMany(() => Reception, () => ItemReceptionAssociation)
    receptions: Array<Reception & { ItemReceptionAssociation: ItemReceptionAssociation }>;
}
