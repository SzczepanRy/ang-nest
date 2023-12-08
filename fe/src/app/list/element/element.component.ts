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
  data?: ElementI;
  @Input()
  index?: number;

  @Output()
  selectedRadio: EventEmitter<any> = new EventEmitter<any>();

  onChangeRadio(value: any) {
    console.log(value.currentTarget.checked);

    this.radioState = value.currentTarget.checked;
    console.log(this.radioState);

    this.selectedRadio.emit({ done: this.radioState, index: this.index });
  }
}
