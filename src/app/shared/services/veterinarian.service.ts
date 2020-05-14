import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinarian } from '../api/model/veterinarian';

@Injectable({
  providedIn: 'root'
})
export class VeterinarianService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<Veterinarian[]> {
    return this.client.get<Veterinarian[]>("/api/veterinarians")
  }

  get(id: number): Observable<Veterinarian> {
    return this.client.get<Veterinarian>(`/api/veterinarians/${id}`)
  }

  create(veterinarian: Veterinarian): Observable<Veterinarian> {
    return this.client.post<Veterinarian>("/api/veterinarians", veterinarian)
  }

  update(veterinarian: Veterinarian): Observable<Veterinarian> {
    return this.client.put<Veterinarian>(`/api/veterinarians/${veterinarian.id}`, veterinarian)
  }

  delete(veterinarian: Veterinarian): Observable<void> {
    return this.client.delete<void>(`/api/veterinarians/${veterinarian.id}`)
  }
}
