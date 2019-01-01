import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithematicComponent } from './arithematic.component';

describe('ArithematicComponent', () => {
  let component: ArithematicComponent;
  let fixture: ComponentFixture<ArithematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
