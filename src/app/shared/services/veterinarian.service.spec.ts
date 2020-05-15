import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VeterinarianService } from './veterinarian.service';
import { Veterinarian } from '../api/model/veterinarian';


describe('VeterinarianService', () => {
  let service: VeterinarianService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VeterinarianService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should query all veterinarians', () => {
    service.getAll().subscribe((veterinarians) => {
      expect(veterinarians.length).toEqual(1);
      expect(veterinarians[0].id).toBe(1)
      expect(veterinarians[0].firstName).toBe("Daneel")
      expect(veterinarians[0].lastName).toBe("R. Olivaw")
    });
    const request = httpMock.expectOne('/api/veterinarians');
    expect(request.request.method).toEqual('GET')
    request.flush([{id: 1, firstName:"Daneel", lastName:"R. Olivaw"}] as Veterinarian[]);
    httpMock.verify();
  });
});
