import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditNoteDialogComponent } from './create-edit-note-dialog.component';

describe('CreateEditNoteDialogComponent', () => {
  let component: CreateEditNoteDialogComponent;
  let fixture: ComponentFixture<CreateEditNoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditNoteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
