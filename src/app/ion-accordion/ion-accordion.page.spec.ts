import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonAccordionPage } from './ion-accordion.page';

describe('IonAccordionPage', () => {
  let component: IonAccordionPage;
  let fixture: ComponentFixture<IonAccordionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonAccordionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
