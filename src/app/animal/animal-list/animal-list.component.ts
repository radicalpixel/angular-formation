import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[]
  
  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.animals = this.service.get()
  }

  onDelete(animal: Animal): void {
    console.log("onDeleteEvent()")
    this.service.delete(animal)
  }
}
