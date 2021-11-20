import { Table, Column, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { Item } from './Item';
import { Reception } from './Reception';

@Table({
    timestamps: true,
    tableName: 'item_reception_association',
})
export class ItemReceptionAssociation extends BaseModel {
    @ForeignKey(() => Item)
    @Column
    itemId!: number;

    @ForeignKey(() => Reception)
    @Column
    receptionId!: number;

    @Column({ type: DataType.FLOAT, allowNull: false })
    public quantity!: number;
}
