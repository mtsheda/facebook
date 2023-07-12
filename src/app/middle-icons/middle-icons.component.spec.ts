import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleIconsComponent } from './middle-icons.component';

describe('MiddleIconsComponent', () => {
  let component: MiddleIconsComponent;
  let fixture: ComponentFixture<MiddleIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleIconsComponent]
    });
    fixture = TestBed.createComponent(MiddleIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
