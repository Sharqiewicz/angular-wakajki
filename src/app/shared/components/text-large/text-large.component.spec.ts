import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLargeComponent } from './text-large.component';

describe('TextLargeComponent', () => {
  let component: TextLargeComponent;
  let fixture: ComponentFixture<TextLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
