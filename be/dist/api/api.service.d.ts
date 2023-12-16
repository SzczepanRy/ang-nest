interface itemI {
    id: number;
    title: string;
    body: string;
    done: boolean;
}
export declare class ApiService {
    items: itemI[];
    findAll(): itemI[];
    addItem(item: itemI): itemI[];
    deleteItem(id: string): itemI[];
    editItem(id: string, done: boolean): itemI[];
}
export {};
