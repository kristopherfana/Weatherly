import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodayHighlightPage } from './today-highlight.page';

describe('TodayHighlightPage', () => {
  let component: TodayHighlightPage;
  let fixture: ComponentFixture<TodayHighlightPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodayHighlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
