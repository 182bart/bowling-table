import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear data when clicked dustbin button', () => {
    const clearSpy = spyOn(component, 'clearData').and.callThrough();
    const cleatButton = fixture.debugElement.query(By.css('.dustbin'));
    cleatButton.triggerEventHandler('click', {});
    expect(clearSpy).toHaveBeenCalled();
    expect(component.showError).toEqual(false);
  });
});
