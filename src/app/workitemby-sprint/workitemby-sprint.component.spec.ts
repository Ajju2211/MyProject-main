import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitembySprintComponent } from './workitemby-sprint.component';

describe('WorkitembySprintComponent', () => {
  let component: WorkitembySprintComponent;
  let fixture: ComponentFixture<WorkitembySprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkitembySprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkitembySprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
