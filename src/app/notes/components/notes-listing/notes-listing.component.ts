import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditNoteDialogComponent } from '../create-edit-note-dialog/create-edit-note-dialog.component';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-listing',
  templateUrl: './notes-listing.component.html',
  styleUrls: ['./notes-listing.component.scss']
})
export class NotesListingComponent implements OnInit {
  public notes: Note[] = [];
  public loading: boolean;

  constructor(public dialog: MatDialog, private notesService: NotesService) {}

  ngOnInit(): void {
    this.listNotes();
  }

  listNotes() {
    this.loading = true;
    this.notesService.getAllNotes().subscribe(
      (notes: Note[]) => {
        this.notes = notes;
        this.loading = false;
      },
      err => {
        this.loading = false;
        console.log('Getting the notes failed!', err);
      }
    );
  }

  openCreateNoteDialog() {
    const dialogRef = this.dialog.open(CreateEditNoteDialogComponent, {
      width: '400px',
      data: {
        note: null
      }
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(data => !!data),
        tap(() => {
          this.loading = true;
        }),
        mergeMap(data => this.notesService.createNote(data))
      )
      .subscribe(
        (note: Note) => {
          this.notes = [note, ...this.notes];
          this.loading = false;
        },
        err => {
          console.log('Creating the note failed!', err);
          this.loading = false;
        }
      );
  }

  openEditNoteDialog(note: Note) {
    const dialogRef = this.dialog.open(CreateEditNoteDialogComponent, {
      width: '400px',
      data: {
        note
      }
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(data => !!data),
        tap(() => {
          this.loading = true;
        }),
        mergeMap(data => this.notesService.updateNote(data))
      )
      .subscribe(
        (updatedNote: Note) => {
          const noteIndex = this.notes.findIndex(
            note => note.id === updatedNote.id
          );
          if (noteIndex > -1) {
            this.notes[noteIndex] = updatedNote;
          }
          this.loading = false;
        },
        err => {
          console.log('Updating the note failed!', err);
          this.loading = false;
        }
      );
  }

  deleteNote(noteId: string) {
    this.loading = true;
    this.notesService.deleteNote(noteId).subscribe(
      () => {
        const noteIndex = this.notes.findIndex(note => note.id === noteId);

        if (noteIndex > -1) {
          this.notes.splice(noteIndex, 1);
        }

        this.loading = false;
      },
      err => {
        console.log('Deleting the note failed!', err);
        this.loading = false;
      }
    );
  }
}
