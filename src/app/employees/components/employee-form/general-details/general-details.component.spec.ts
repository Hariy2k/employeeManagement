import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDetailsComponent } from './general-details.component';

describe('GeneralDetailsComponent', () => {
  let component: GeneralDetailsComponent;
  let fixture: ComponentFixture<GeneralDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
