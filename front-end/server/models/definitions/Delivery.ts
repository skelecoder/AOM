import { Table, Column, DataType, BelongsToMany } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { ItemDeliveryAssociation } from './ItemDeliveryAssociation';

@Table({
    timestamps: true,
    tableName: 'delivery',
})
export class Delivery extends BaseModel {
    @Column({ type: DataType.DATE, allowNull: false })
    public datetime!: Date;

    @Column({ type: DataType.STRING, allowNull: false })
    public type!: 'reclamation' | 'neuf';
    
    @Column({ type: DataType.STRING, allowNull: false })
    public team!: string;
    
    @Column({ type: DataType.STRING, allowNull: false })
    public siteId!: string;

    @BelongsToMany(() => Delivery, () => ItemDeliveryAssociation)
    deliveries: Array<Delivery & { ItemDeliveryAssociation: ItemDeliveryAssociation }>;
}
