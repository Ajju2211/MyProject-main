import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintWorkitemComponent } from './sprint-workitem.component';

describe('SprintWorkitemComponent', () => {
  let component: SprintWorkitemComponent;
  let fixture: ComponentFixture<SprintWorkitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintWorkitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintWorkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
