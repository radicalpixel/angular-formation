import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/api/model/animal';
import { AnimalService } from 'src/app/shared/services/animal.service';


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {
  animal: Animal = { name:"", species:"", veterinarian:"", comment: "" }

  constructor(private service: AnimalService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.service.create(this.animal).subscribe({
      // useless, osef de l'id mais bon.
      next: animal => this.animal = animal
    })
  }
}
