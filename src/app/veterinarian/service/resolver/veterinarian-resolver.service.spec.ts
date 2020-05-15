import { TestBed } from '@angular/core/testing';

import { VeterinarianResolverService } from './veterinarian-resolver.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VeterinarianResolverService', () => {
  let service: VeterinarianResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VeterinarianResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
