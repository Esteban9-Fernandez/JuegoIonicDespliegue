import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopupComponentComponent } from './popup.component';

describe('PopupComponentComponent', () => {
  let component: PopupComponentComponent;
  let fixture: ComponentFixture<PopupComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PopupComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
