import { Table, Column, DataType, AllowNull, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';

import { BaseModel } from './BaseModel';
import { Reception } from './Reception';

@Table({
    timestamps: true,
    tableName: 'provider',
})
export class Provider extends BaseModel {
    @Column({ type: DataType.STRING, allowNull: false })
    public name!: string;

    @Column({ type: DataType.STRING })
    public phone?: string;
    
    @Column({ type: DataType.STRING })
    public email?: string;

    @HasMany(() => Reception)
    public receptions?: Reception[];
}
