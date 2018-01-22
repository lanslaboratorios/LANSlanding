import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaSmallComponent } from './sistema-small.component';

describe('SistemaSmallComponent', () => {
  let component: SistemaSmallComponent;
  let fixture: ComponentFixture<SistemaSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
