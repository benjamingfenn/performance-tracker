import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComponentFormComponent } from './workout-component-form.component';

describe('WorkoutComponentFormComponent', () => {
  let component: WorkoutComponentFormComponent;
  let fixture: ComponentFixture<WorkoutComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutComponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
