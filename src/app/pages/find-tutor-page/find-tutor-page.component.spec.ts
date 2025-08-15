import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTutorPageComponent } from './find-tutor-page.component';

describe('FindTutorPageComponent', () => {
  let component: FindTutorPageComponent;
  let fixture: ComponentFixture<FindTutorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindTutorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
