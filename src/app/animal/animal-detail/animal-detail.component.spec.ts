import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalDetailComponent } from './animal-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/shared/api/model/animal';
import { of } from 'rxjs';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';


describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AnimalDetailComponent, TruncatePipe ],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: {
            data: of({
              animal: {
                "id": 2,
                "name": "Chatbus",
                "species": "cat",
                "veterinarian": "Panoramix D'Armorique",
                "comment": "Faire prendre rdv 1 mois au moins en avance afin de pouvoir réserver le hangar du mécaniste voisin."
              }
            })
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
