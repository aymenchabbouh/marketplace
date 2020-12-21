import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemfoundComponent } from './problemfound.component';

describe('ProblemfoundComponent', () => {
  let component: ProblemfoundComponent;
  let fixture: ComponentFixture<ProblemfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
