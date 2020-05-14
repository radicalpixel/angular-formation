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
}
