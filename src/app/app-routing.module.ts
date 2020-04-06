import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListingComponent } from './notes/components/notes-listing/notes-listing.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'notes',
    component: NotesListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
