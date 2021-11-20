import { Table, Column, DataType, AllowNull, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { ItemReceptionAssociation } from './ItemReceptionAssociation';
import { ItemDeliveryAssociation } from './ItemDeliveryAssociation';

@Table({
    timestamps: false,
    tableName: 'item',
})
export class Item extends BaseModel {
    @Column({ type: DataType.INTEGER, allowNull: false })
    public itemId!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    public name!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    public unity!: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    public price!: number;

    @HasMany(() => ItemDeliveryAssociation)
    public itemDeliveryAssociation?: ItemDeliveryAssociation[];

    @HasMany(() => ItemReceptionAssociation)
    public itemReceptionAssociation?: ItemReceptionAssociation[];

    // @Column({ type: DataType.STRING, allowNull: false })
    // public slug!: string;

    // @AllowNull
    // @Column({ type: DataType.STRING })
    // public featureImage?: string;

    // @Column({ type: DataType.STRING, allowNull: false })
    // public excerpt!: string;

    // @Column({ type: DataType.TINYINT, defaultValue: false, allowNull: false })
    // public featured!: boolean;

    // @AllowNull
    // @Column({ type: DataType.DATE })
    // public publishedDate?: Date;

    // @Column({ type: DataType.TEXT, allowNull: false })
    // public content!: string;

    // /* Associantions */
    // // Author
    // @BelongsTo(() => User)
    // public author!: User;

    // @ForeignKey(() => User)
    // @Column({ type: DataType.INTEGER, allowNull: false })
    // public authorId!: number;
    // // End Author

    // // Category
    // @BelongsTo(() => Category)
    // public category!: Category;

    // @ForeignKey(() => Category)
    // @Column({ type: DataType.INTEGER, allowNull: false })
    // public categoryId!: number;
    // // End Category

    // @HasMany(() => PostTagAssociation)
    // public postTagAssociations?: PostTagAssociation[];
    // /* End Associantions */
}
