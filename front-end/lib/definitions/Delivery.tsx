import React from 'react';
import { Item } from 'lib/definitions/Item';

export interface Delivery {
    id: number;
    teamLeader: string;
    siteCode: number;
    siteType: 'Réclamation' | 'Branchement neuf';
    datetime: string;
    img?: string;
    return?: boolean;
    provider: string;
    items: Item[];
    itemsCount: number;
}