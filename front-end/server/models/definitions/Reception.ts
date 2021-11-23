import { Table, Column, DataType, AllowNull, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { ItemReceptionAssociation } from './ItemReceptionAssociation';
import { Provider } from './Provider';

@Table({
    timestamps: true,
    tableName: 'reception',
})
export class Reception extends BaseModel {
    @Column({ type: DataType.DATE, allowNull: false })
    public datetime!: Date;

    @Column({ type: DataType.STRING})
    public img?: string;

    @Column({ type: DataType.BOOLEAN, allowNull: false })
    public return!: boolean;

    @ForeignKey(() => Provider)
    @Column
    providerId: number;

    @BelongsTo(() => Provider)
    provider!: Provider;

    @HasMany(() => ItemReceptionAssociation)
    itemRecepttionAssociation!: ItemReceptionAssociation[];
}
