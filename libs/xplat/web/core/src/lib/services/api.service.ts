import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@monorepo/xplat/environments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get(environment.api);
  }
}
