import { Body, Post, Get, Injectable, Delete, Param } from '@nestjs/common';

interface itemI {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

@Injectable()
export class ApiService {
  items: itemI[] = [
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

  findAll() {
    return this.items;
  }

  addItem(item: itemI) {
    this.items.push(item);
    return this.items;
  }

  deleteItem(id: string) {
    this.items = this.items.filter((el) => el.id !== +id);
    return this.items;
  }
  editItem(id: string, done: boolean) {
    this.items = this.items.map((el) => {
      if (el.id == +id) {
        el.done = done;
      }
      return el;
    });

    return this.items;
  }
}
