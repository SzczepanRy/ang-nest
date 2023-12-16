import { Component, EventEmitter, Input, Output } from '@angular/core';
interface elementI {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

@Component({
  selector: 'list-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  title: string = '';

  body: string = '';

  showTextarea: boolean = false;

  changeTitle(event: any) {
    this.showTextarea = true;
    this.title = event.currentTarget.value;
  }
  changeBody(event: any) {
    this.body = event.currentTarget.value;
  }

  @Output()
  submit: EventEmitter<elementI> = new EventEmitter<elementI>();

  @Input()
  elements?: elementI[];

  onSubmit() {
    //console.log({ title: this.title, body: this.body, done: false });
    this.submit.emit({
      id: this.elements?.length
        ? this.elements[this.elements.length - 1].id + 1
        : 0,
      title: this.title,
      body: this.body,
      done: false,
    });
    this.body = '';
    this.title = '';
    this.showTextarea = false;
  }
}
