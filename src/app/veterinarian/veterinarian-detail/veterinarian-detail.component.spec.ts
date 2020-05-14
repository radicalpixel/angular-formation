import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianDetailComponent } from './veterinarian-detail.component';

describe('VeterinarianDetailComponent', () => {
  let component: VeterinarianDetailComponent;
  let fixture: ComponentFixture<VeterinarianDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarianDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
