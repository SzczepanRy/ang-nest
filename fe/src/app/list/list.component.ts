import { Component } from '@angular/core';

export interface ElementI {
  title: string;
  body: string;
  done: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  changeArr(obj: any) {
    let arr = this.elements.map((el: ElementI, i: number) => {
      if (i == obj.index) {
        return { title: el.title, body: el.body, done: obj.done };
      }
      return el;
    });
    this.elements = arr;
    console.log('aa');

    console.log(this.elements);
  }

  elements: ElementI[] = [
    {
      title: 'title',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
      done: true,
    },
    {
      title: 'title',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
      done: false,
    },
    {
      title: 'title',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
      done: false,
    },
    {
      title: 'title',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
      done: false,
    },
    {
      title: 'title',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
      done: false,
    },
    {
      title: 'title',
      body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eaque, provident repellendus nisi molestiae explicabo debitis earum velit officia unde quasi consequatur alias sequi vero, recusandae ipsa laborum commodi pariatur!',
      done: false,
    },
  ];
}
