import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepsComponent } from './peps.component';

describe('PepsComponent', () => {
  let component: PepsComponent;
  let fixture: ComponentFixture<PepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
