import { Injectable, Inject } from '@angular/core';
import { APP_SERVICE_CONF } from 'src/app/AppConfig/appconfig.serve';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { ElementI } from '../list.component';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(
    @Inject(APP_SERVICE_CONF) private config: AppConfig,
    private http: HttpClient
  ) {}

  getList() {
    return this.http.get<ElementI[]>('http://localhost:3000/api');
  }
  addList(element: ElementI) {
    return this.http.post<ElementI[]>('http://localhost:3000/api/add', element);
  }
  deleteList(id: number) {
    return this.http.delete<ElementI[]>(
      'http://localhost:3000/api/delete/' + id
    );
  }
  editList(obj: any) {
    return this.http.put<ElementI[]>('http://localhost:300/api/edit' + obj.id, {
      done: obj.done,
    });
  }
}
