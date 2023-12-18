// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
// import { MainComponent } from './main/main.component';
// import { HeaderComponent } from './header/header.component';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let debugElement: DebugElement;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         FooterComponent,
//         MainComponent,
//         HeaderComponent,
//       ],
//     });
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     debugElement = fixture.debugElement;
//   });

//   fit('should create the appComponent', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render h3 element with neon-text class and uppercase title', () => {
//     fixture.detectChanges();

//     const title = debugElement.query(By.css('h3.neon-text'));
//     expect(title).toBeTruthy();
//     expect(title.nativeElement.textContent.trim()).toBe('bowling score table');
//   });
//   // it(`should have as title 'bowling'`, () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.componentInstance;
//   //   expect(app.title).toEqual('bowling score table');
//   // });

//   // it('should render title', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.nativeElement as HTMLElement;
//   //   expect(compiled.querySelector('.content span')?.textContent).toContain(
//   //     'bowling app is running!'
//   //   );
//   // });
// });
