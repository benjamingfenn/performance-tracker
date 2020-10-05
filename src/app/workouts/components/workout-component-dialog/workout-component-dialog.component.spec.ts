import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComponentDialogComponent } from './workout-component-dialog.component';

describe('WorkoutComponentDialogComponent', () => {
  let component: WorkoutComponentDialogComponent;
  let fixture: ComponentFixture<WorkoutComponentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutComponentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
