import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirectivesComponent } from './ng-for-directives.component';

describe('NgForDirectivesComponent', () => {
  let component: NgForDirectivesComponent;
  let fixture: ComponentFixture<NgForDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
