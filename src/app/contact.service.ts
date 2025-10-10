import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Update this URL to the API endpoint where the form data will be submitted
  private apiUrl = 'https://your-backend-api-url.com/contact';  // Replace with actual endpoint

  constructor(private http: HttpClient) { }

  // Method to send the form data to the backend API
  submitContactForm(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, formData, { headers });
  }
}
