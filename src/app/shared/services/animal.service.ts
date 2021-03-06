import { Injectable } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  
  constructor(private client: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.client.get<Animal[]>("/api/animals")
  }

  get(id: number): Observable<Animal> {
    return this.client.get<Animal>(`/api/animals/${id}`)
  }

  create(animal: Animal): Observable<Animal> {
    return this.client.post<Animal>("/api/animals", animal)
  }

  update(animal: Animal): Observable<Animal> {
    return this.client.put<Animal>(`/api/animals/${animal.id}`, animal)
  }

  delete(animal: Animal): Observable<void> {
    return this.client.delete<void>(`/api/animals/${animal.id}`)
  }
}
