import { Injectable } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  get(): Animal[] {
    return [
      { 
        name: "Newt",
        species: "Beagle",
        veterinarian: "Stéphanie Lazrd",
        comment: "suréxcité"},
      { 
        name: "Pastel",
        species: "Chat",
        veterinarian: "Stéphanie Lazrd",
        comment: "un peu con"
      },
      { 
        name: "Pepper", 
        species: "Chat", 
        veterinarian: "Stéphanie Lazrd", 
        comment: "flippante"
      }
    ]
  }
}
