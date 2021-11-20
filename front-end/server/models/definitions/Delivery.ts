import { Table, Column, DataType, AllowNull, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { ItemDeliveryAssociation } from './ItemDeliveryAssociation';

@Table({
    timestamps: true,
    tableName: 'delivery',
})
export class Delivery extends BaseModel {
    @Column({ type: DataType.INTEGER, allowNull: false })
    public deliveryId!: number;

    @Column({ type: DataType.DATE, allowNull: false })
    public datetime!: Date;

    @HasMany(() => ItemDeliveryAssociation)
    public itemDeliveryAssociation?: ItemDeliveryAssociation[];
}
