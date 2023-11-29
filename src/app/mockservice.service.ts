import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MockserviceService {
  
  private mockDataUrl = 'assets/assessmentData-mock.json';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<any>(this.mockDataUrl);
  }
  getUsers1() {
    return this.http.get<any>(this.mockDataUrl);
  }
}

