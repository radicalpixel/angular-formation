import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianItemComponent } from './veterinarian-item.component';

describe('VeterinarianItemComponent', () => {
  let component: VeterinarianItemComponent;
  let fixture: ComponentFixture<VeterinarianItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarianItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
