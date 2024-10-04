import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDreamPage } from './add-dream.page';

describe('AddDreamPage', () => {
  let component: AddDreamPage;
  let fixture: ComponentFixture<AddDreamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
