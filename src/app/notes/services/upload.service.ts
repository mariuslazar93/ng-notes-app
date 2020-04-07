import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private fileIoBaseUrl = 'https://file.io';

  constructor(private http: HttpClient) {}

  upload(formData) {
    return this.http.post(this.fileIoBaseUrl, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
