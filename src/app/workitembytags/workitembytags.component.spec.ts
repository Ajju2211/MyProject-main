import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitembytagsComponent } from './workitembytags.component';

describe('WorkitembytagsComponent', () => {
  let component: WorkitembytagsComponent;
  let fixture: ComponentFixture<WorkitembytagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkitembytagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkitembytagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
