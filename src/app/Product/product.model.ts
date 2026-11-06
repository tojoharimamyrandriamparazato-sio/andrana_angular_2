export type ProductType = 'all' | 'drink' | 'food';
export interface Product {
    id: number;
    name: string;
    type: ProductType;
}
export interface CodeLabel {
    code: string;
    label: string;
}