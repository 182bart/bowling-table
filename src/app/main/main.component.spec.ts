import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { By } from '@angular/platform-browser';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display  no data info', () => {
    component.tableSource.data = [];
    fixture.detectChanges();
    const noDataInfo = fixture.debugElement.query(By.css('.no-data'));
    expect(noDataInfo).toBeTruthy();
    expect(noDataInfo.nativeElement.textContent).toContain(
      'Dodaj plik z wynikami!'
    );
  });
});
