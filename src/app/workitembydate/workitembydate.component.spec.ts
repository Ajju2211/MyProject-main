import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkitembydateComponent } from './workitembydate.component';

describe('WorkitembydateComponent', () => {
  let component: WorkitembydateComponent;
  let fixture: ComponentFixture<WorkitembydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkitembydateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkitembydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
