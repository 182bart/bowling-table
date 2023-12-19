import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        MainComponent,
        HeaderComponent,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the appComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render  title', () => {
    const title = debugElement.query(By.css('h3.neon-text'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent.trim()).toBe('BOWLING SCORE TABLE');
  });
});
