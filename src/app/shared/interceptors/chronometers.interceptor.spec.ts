import { TestBed } from '@angular/core/testing';

import { ChronometersInterceptor } from './chronometers.interceptor';

describe('ChronometersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ChronometersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ChronometersInterceptor = TestBed.inject(ChronometersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
