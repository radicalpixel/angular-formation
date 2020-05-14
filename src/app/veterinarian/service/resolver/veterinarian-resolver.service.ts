import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Veterinarian } from 'src/app/shared/api/model/veterinarian';
import { VeterinarianService } from 'src/app/shared/services/veterinarian.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeterinarianResolverService implements Resolve<Veterinarian> {

  constructor(private service: VeterinarianService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Veterinarian> {
    const id = route.paramMap.get('id');
    return this.service.get(+id);
  }
}