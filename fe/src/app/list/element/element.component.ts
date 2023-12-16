import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementI } from '../list.component';

@Component({
  selector: 'list-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent {
  radioState: boolean = false;

  @Input()
  data!: ElementI;
  @Input()
  index!: number;

  @Output()
  deleteElement: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  selectedRadio: EventEmitter<any> = new EventEmitter<any>();

  delete(id: number) {
    this.deleteElement.emit(id);
  }

  onChangeRadio(data: any) {
    this.radioState = data.done;
    this.selectedRadio.emit({ done: !data.done, index: this.data.id });
  }
}
