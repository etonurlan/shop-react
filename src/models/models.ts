export interface ServerResponse<T> {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: T;
}
export interface IGood {
    id: number;
    title: string;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}