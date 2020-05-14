import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianRootComponent } from './veterinarian-root.component';

describe('VeterinarianRootComponent', () => {
  let component: VeterinarianRootComponent;
  let fixture: ComponentFixture<VeterinarianRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarianRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
