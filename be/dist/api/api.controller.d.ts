import { ApiService } from './api.service';
interface itemI {
    id: number;
    title: string;
    body: string;
    done: boolean;
}
export declare class ApiController {
    private apiService;
    constructor(apiService: ApiService);
    findAll(): itemI[];
    addItem(item: itemI): itemI[];
    deleteItem(id: string): itemI[];
    editItem({ done }: any, id: string): itemI[];
}
export {};
