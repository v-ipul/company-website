import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'https://mailthis.to/YOUR_ALIAS'; // Replace YOUR_ALIAS

  constructor(private http: HttpClient) {}

  PostMessage(input: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, JSON.stringify(input), { headers });
  }
}
