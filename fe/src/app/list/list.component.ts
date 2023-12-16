import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ServiceService } from './service/service.service';

export interface ElementI {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {
  constructor(private service: ServiceService) {}

  elements: ElementI[] = [];
  edit(obj: any): void {
    if (obj.id) {
      this.service.editList(obj).subscribe((data) => {
        this.elements = data;
      });
    }
  }

  @Input()
  searchText: string = '';

  delete(id: any) {
    id = +id;
    this.service.deleteList(id).subscribe((data) => {
      this.elements = data;
    });
  }

  filterChange(text: string) {
    this.searchText = text;
  }
  updateElements(event: ElementI) {
    this.service.addList(event).subscribe((data) => {
      this.elements = data;
    });
    //this.elements.unshift(event);
  }
  ngOnChanges(): void {
    this.service.getList().subscribe((data) => {
      this.elements = data;
    });
  }

  ngOnInit(): void {
    this.service.getList().subscribe((data) => {
      this.elements = data;
    });
  }
}
