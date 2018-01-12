import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LansFooterComponent } from './lans-footer.component';

describe('LansFooterComponent', () => {
  let component: LansFooterComponent;
  let fixture: ComponentFixture<LansFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LansFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LansFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
