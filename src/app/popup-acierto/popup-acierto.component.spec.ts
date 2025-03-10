import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopupAciertoComponent } from './popup-acierto.component';

describe('PopupAciertoComponent', () => {
  let component: PopupAciertoComponent;
  let fixture: ComponentFixture<PopupAciertoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PopupAciertoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupAciertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
