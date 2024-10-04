import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDreamsPage } from './my-dreams.page';

describe('MyDreamsPage', () => {
  let component: MyDreamsPage;
  let fixture: ComponentFixture<MyDreamsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDreamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
