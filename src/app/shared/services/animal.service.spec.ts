import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AnimalService } from './animal.service';
import { Animal } from '../api/model/animal';


describe('AnimalService', () => {
  let service: AnimalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AnimalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should query all animals', () => {
    service.getAll().subscribe((animals) => {
        expect(animals.length).toEqual(1);
        expect(animals[0].id).toEqual(2);
        expect(animals[0].name).toEqual("Chatbus");
        expect(animals[0].species).toEqual("cat");
        expect(animals[0].veterinarian).toEqual("Panoramix D'Armorique");
        expect(animals[0].comment).toEqual("Faire prendre rdv 1 mois au moins en avance afin de pouvoir réserver le hangar du mécaniste voisin.");
    })
    const request = httpMock.expectOne('/api/animals')
    expect(request.request.method).toEqual("GET");
    request.flush(([
      {
        "id": 2,
        "name": "Chatbus",
        "species": "cat",
        "veterinarian": "Panoramix D'Armorique",
        "comment": "Faire prendre rdv 1 mois au moins en avance afin de pouvoir réserver le hangar du mécaniste voisin."
      }
    ]) as Animal[])
    httpMock.verify();
  });
});
