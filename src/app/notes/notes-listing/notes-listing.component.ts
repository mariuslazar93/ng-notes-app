import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditNoteDialogComponent } from '../create-edit-note-dialog/create-edit-note-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-notes-listing',
  templateUrl: './notes-listing.component.html',
  styleUrls: ['./notes-listing.component.scss']
})
export class NotesListingComponent implements OnInit {
  public notes = [
    {
      id: '1',
      title: 'First note',
      content: 'First note content'
    },
    {
      id: '2',
      title: 'Second note',
      content: 'Second note content'
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openCreateNoteDialog() {
    console.log('create note');

    const dialogRef = this.dialog.open(CreateEditNoteDialogComponent, {
      width: '400px',
      data: {
        note: null
      }
    });

    dialogRef
      .afterClosed()
      .subscribe(data => console.log('after close data:', data));
  }

  openEditNoteDialog(note) {
    console.log('edit note ' + note.id);

    const dialogRef = this.dialog.open(CreateEditNoteDialogComponent, {
      width: '400px',
      data: {
        note
      }
    });

    dialogRef
      .afterClosed()
      .subscribe(data => console.log('after close data:', data));
  }

  deleteNote(noteId) {
    console.log('delete note', noteId);
  }
}
