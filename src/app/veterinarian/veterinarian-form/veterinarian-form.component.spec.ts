import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VeterinarianFormComponent } from './veterinarian-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VeterinarianFormComponent', () => {
  let component: VeterinarianFormComponent;
  let fixture: ComponentFixture<VeterinarianFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ VeterinarianFormComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
