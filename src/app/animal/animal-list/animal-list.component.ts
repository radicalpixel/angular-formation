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
    this.refreshUi()
  }

  onDelete(animal: Animal): void {
    this.service.delete(animal).subscribe({
        next:undefined => this.refreshUi()
    })
  }

  private refreshUi() {
    this.service.getAll().subscribe({
      next: animals => this.animals = animals
    })
  }
}
