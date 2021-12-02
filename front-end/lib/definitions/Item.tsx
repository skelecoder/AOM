import React from 'react';

export type Unity = 'm3' | 'ml' | 'Forfait' | 'H' | 'U' | 'm2' | 'Tonne' | 'dm' | 'kg';

export interface Item {
    id: number;
    name: string;
    code: string;
    model: string;
    unity: Unity;
    price: number;
    qty: number;
}
