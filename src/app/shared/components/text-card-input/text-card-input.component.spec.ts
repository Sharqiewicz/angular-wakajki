import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardInputComponent } from './text-card-input.component';

describe('TextCardInputComponent', () => {
  let component: TextCardInputComponent;
  let fixture: ComponentFixture<TextCardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCardInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
