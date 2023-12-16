"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
let ApiService = class ApiService {
    constructor() {
        this.items = [
            {
                id: 0,
                title: 'title',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
                done: true,
            },
            {
                id: 1,
                title: 'title',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
                done: false,
            },
            {
                id: 2,
                title: 'title',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
                done: false,
            },
            {
                id: 3,
                title: 'title',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
                done: false,
            },
            {
                id: 4,
                title: 'title',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
                done: false,
            },
            {
                id: 5,
                title: 'title',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
                done: false,
            },
        ];
    }
    findAll() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
        return this.items;
    }
    deleteItem(id) {
        this.items = this.items.filter((el) => el.id !== +id);
        return this.items;
    }
    editItem(id, done) {
        this.items = this.items.map((el) => {
            if (el.id == +id) {
                el.done = done;
            }
            return el;
        });
        return this.items;
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);
//# sourceMappingURL=api.service.js.map