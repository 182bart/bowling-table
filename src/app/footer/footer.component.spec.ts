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

  fit('should create the component', () => {
    expect(component).toBeTruthy();
  });

  fit('should render the content in the footer', () => {
    const footerElement: HTMLElement = fixture.nativeElement;
    const spanElement = footerElement.querySelector('span');
    const anchorElement = footerElement.querySelector('a');

    // Sprawdzamy, czy span zawiera poprawny tekst
    expect(spanElement?.textContent).toContain('Bartosz Korusiewicz ©');

    // Sprawdzamy, czy link zawiera poprawny tekst
    expect(anchorElement?.textContent).toContain(
      'bartosz.korusiewicz@gmail.com'
    );

    // Sprawdzamy, czy link ma poprawny atrybut href
    expect(anchorElement?.getAttribute('href')).toBe(
      'mailto: bartosz.korusiewicz@gmail.com'
    );
  });
});
