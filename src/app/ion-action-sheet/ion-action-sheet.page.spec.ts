import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonActionSheetPage } from './ion-action-sheet.page';

describe('IonActionSheetPage', () => {
  let component: IonActionSheetPage;
  let fixture: ComponentFixture<IonActionSheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
