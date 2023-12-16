import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'list-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  changedSearch: EventEmitter<string> = new EventEmitter<string>();

  updateSearchString(inputEl: any) {
    this.searchText = inputEl.currentTarget.value;
    this.changedSearch.emit(this.searchText);
  }
}
