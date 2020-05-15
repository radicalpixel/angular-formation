import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalItemComponent } from './animal-item.component';


describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    component.animal = {
      "id": 3,
      "name": "Teto",
      "species": "fox-squirrel",
      "veterinarian": "Ged Épervier",
      "comment": "Très agité."
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
