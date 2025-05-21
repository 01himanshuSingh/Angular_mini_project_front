import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Diary {
  _id?: string;
  title: string;
  date: string;
  entry: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  // ✅ Set to your real backend deployment URL
  private apiUrl = 'https://angular-project-mini-backend.vercel.app/api/diaries';

  constructor(private http: HttpClient) {}

  getAllEntries(): Observable<Diary[]> {
    return this.http.get<Diary[]>(this.apiUrl);
  }

  getEntryById(id: string): Observable<Diary> {
    return this.http.get<Diary>(`${this.apiUrl}/${id}`);
  }

  addEntry(entry: Diary): Observable<Diary> {
    return this.http.post<Diary>(this.apiUrl, entry);
  }

  updateEntry(id: string, entry: Diary): Observable<Diary> {
    return this.http.put<Diary>(`${this.apiUrl}/${id}`, entry);
  }

  deleteEntry(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
