import { NgModule } from '@angular/core';
import { NotesListingComponent } from './components/notes-listing/notes-listing.component';
import { SharedModule } from '../shared/shared.module';
import { CreateEditNoteDialogComponent } from './components/create-edit-note-dialog/create-edit-note-dialog.component';

@NgModule({
  declarations: [NotesListingComponent, CreateEditNoteDialogComponent],
  imports: [SharedModule],
  exports: [NotesListingComponent],
})
export class NotesModule {}
