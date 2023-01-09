import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitembyidComponent } from './workitembyid.component';

describe('WorkitembyidComponent', () => {
  let component: WorkitembyidComponent;
  let fixture: ComponentFixture<WorkitembyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkitembyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkitembyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
