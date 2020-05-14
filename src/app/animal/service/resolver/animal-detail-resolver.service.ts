import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalDetailResolverService implements Resolve<Animal> {

  constructor(private service: AnimalService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Animal> {
    const id = route.paramMap.get('id');
    return this.service.get(+id);
  }
}
