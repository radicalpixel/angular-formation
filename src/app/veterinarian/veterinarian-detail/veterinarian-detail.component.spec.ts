import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianDetailComponent } from './veterinarian-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VeterinarianDetailComponent', () => {
  let component: VeterinarianDetailComponent;
  let fixture: ComponentFixture<VeterinarianDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
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
