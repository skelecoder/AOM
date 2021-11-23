import { Table, Column, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { Item } from './Item';
import { Delivery } from './Delivery';

@Table({
    timestamps: true,
    tableName: 'item_delivery_association',
})
export class ItemDeliveryAssociation extends BaseModel {
    @ForeignKey(() => Item)
    @Column
    itemId: number;

    @BelongsTo(() => Item)
    item: Item;

    @ForeignKey(() => Delivery)
    @Column
    deliveryId: number;

    @BelongsTo(() => Delivery)
    reception: Delivery;

    @Column({ type: DataType.FLOAT, allowNull: false })
    public quantity!: number;
}
