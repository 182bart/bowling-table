// footer.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the content in the footer', () => {
    const footer: HTMLElement = fixture.nativeElement;
    const name = footer.querySelector('span');
    const email = footer.querySelector('a');
    expect(name?.textContent).toContain('Bartosz Korusiewicz ©');

    expect(email?.textContent).toContain('bartosz.korusiewicz@gmail.com');

    expect(email?.getAttribute('href')).toBe(
      'mailto: bartosz.korusiewicz@gmail.com'
    );
  });
});
