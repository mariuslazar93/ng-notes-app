import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-edit-note-dialog',
  templateUrl: './create-edit-note-dialog.component.html',
  styleUrls: ['./create-edit-note-dialog.component.scss']
})
export class CreateEditNoteDialogComponent implements OnInit {
  public noteForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<CreateEditNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    if (this.data.note) {
      this.noteForm.patchValue(this.data.note);
    }
  }

  onSave() {
    console.log('save:', this.noteForm.value);
    this.dialogRef.close(this.noteForm.value);
  }
}
