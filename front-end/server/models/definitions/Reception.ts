import { Table, Column, DataType, AllowNull, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { ItemReceptionAssociation } from './ItemReceptionAssociation';
import { Provider } from './Provider';

@Table({
    timestamps: true,
    tableName: 'reception',
})
export class Reception extends BaseModel {
    @Column({ type: DataType.INTEGER, allowNull: false })
    public receptionId!: number;

    @Column({ type: DataType.DATE, allowNull: false })
    public datetime!: Date;

    @Column({ type: DataType.BOOLEAN, allowNull: false })
    public return!: boolean;

    @BelongsTo(() => Provider)
    public provider!: Provider;

    @HasMany(() => ItemReceptionAssociation)
    public itemRecepttionAssociation!: ItemReceptionAssociation[];

    // @ForeignKey(() => Provider)
    // @Column({ type: DataType.INTEGER, allowNull: false })
    // public providerId!: number;
}
