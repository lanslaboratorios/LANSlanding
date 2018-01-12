import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonesComponent } from './razones.component';

describe('RazonesComponent', () => {
  let component: RazonesComponent;
  let fixture: ComponentFixture<RazonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
