import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Note } from './note.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseUrl = environment.notes_api;

  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<Note[]> {
    return this.http
      .get(`${this.baseUrl}/notes`)
      .pipe(map((response: any) => response.notes));
  }

  createNote(note: Note): Observable<Note> {
    return this.http
      .post(`${this.baseUrl}/notes`, note)
      .pipe(map((response: any) => response.note));
  }

  updateNote(note: Note): Observable<Note> {
    const body = {
      title: note.title,
      content: note.content,
    };

    return this.http
      .patch(`${this.baseUrl}/notes/${note.id}`, body)
      .pipe(map((response: any) => response.note));
  }

  deleteNote(noteId: string): Observable<Note> {
    return this.http
      .delete(`${this.baseUrl}/notes/${noteId}`)
      .pipe(map((response: any) => response.note));
  }
}
