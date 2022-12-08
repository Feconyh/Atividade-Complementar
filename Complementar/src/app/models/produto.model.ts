import { Guid } from 'guid-typescript';

export interface Produto {
    id: Guid
    name: string
    value: number
    quantity: number
}